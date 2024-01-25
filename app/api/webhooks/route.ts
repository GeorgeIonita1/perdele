import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;

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
    return new Response('Error occured', {
      status: 400
    })
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === 'user.updated' || eventType === 'user.created') {
    try {
      const response = await fetch(`https://api.clerk.dev/v1/users/${id}`, {
        headers: {
          'Authorization': `Bearer ${CLERK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      const emailAddresses = data.email_addresses;
      console.log('my data is:', data)
      console.log(`User's email addresses: ${emailAddresses[0].email_address}`);

    } catch (error) {
      console.error('Failed to add user to the db', error);
      return new Response('Failed to create/update user to db');
    }
  } else if (eventType === 'user.deleted') {
    // add code !
    console.log('deleted user from db')
  }
  return new Response('da, ai reusit, brovos!', { status: 200 })
}
