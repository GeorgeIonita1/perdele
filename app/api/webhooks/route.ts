import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import prisma from '@/prisma/prisma';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
  const CREATE_USER = 'user.created';
  const UPDATE_USER = 'user.updated';
  const DELETED_USER = 'user.deleted';

  if (!WEBHOOK_SECRET) {
    console.error('Webhook secret not provided check env variables');
    return new Response('Webhook secret not provided check env variables', { status: 400 });
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error('Error occured -- no svix headers');
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured - Svix instance validation verification failed', {
      status: 400
    })
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(eventType, id)

  switch (eventType) {
    case CREATE_USER: {
      console.log('user create');

      try {
        const response = await fetch(`https://api.clerk.dev/v1/users/${id}`, {
          headers: {
            'Authorization': `Bearer ${CLERK_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        });

        const userData = await response.json();
        const emailAddresses = userData.email_addresses.map((email: any) => email.email_address);
        console.log('email addresses', emailAddresses)

        if (id) {
          const user = await prisma.user.create({
            data: {
              id,
              first_name: userData.first_name,
              last_name: userData.last_name,
              emails: [...emailAddresses]
            },
          })
          console.log(user);
        }

      } catch (error) {
        console.error('Failed to add user to the db', error);
        return new Response('Failed to create user to db');
      }
      
      break;
    }
    case UPDATE_USER: {
      // this will only update user email addresses as its the only remarkable change
      // that the user can do through the clerk webhook
      try {
        const response = await fetch(`https://api.clerk.dev/v1/users/${id}`, {
          headers: {
            'Authorization': `Bearer ${CLERK_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        });
        
        const userData = await response.json();
        console.log('before:', userData.email_addresses)
        const userEmailAddress = userData.email_addresses.map((email: any) => email.email_address);
        console.log('update userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', userEmailAddress);

        const mutatedUser = await prisma.user.update({
          where: { id },
          data: {
            emails: [...userEmailAddress]
          },
        });
        console.log(mutatedUser)
      } catch (err) {
        console.error('Error updating the user')
        return new Response('Failed to update user to db');
      }
      
      break;
    }
    case DELETED_USER: {
      console.log('deleting user')
      console.log(id);

      try {
        const deletedEmails = await prisma.user.delete({
          where: {
            id
          }
        });
        console.log('deleted emails:', deletedEmails);
      } catch (err) {
        console.error('Failed to delete user emails relationship to the db', err);
        return new Response('Failed to delete user emails relationship to db');
      }
      
      break;
    }
  }

  return new Response('Request successfull!', { status: 200 })
}
