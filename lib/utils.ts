import prisma from "@/prisma/prisma";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export const fallbackText = 'Imagine alternativa de urgenta';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const footerLinks: FooterLink[] = [
  {
    title: 'Support',
    lines: [
      'Help & Contact Us',
      'Return & Refunds',
      'Online Stores'
    ]
  },
  {
    title: 'Company',
    lines: [
      'What we do',
      'Gift Offers',
      'F.A.Q'
    ]
  },
  {
    title: 'Category',
    lines: [
      'Livingroom',
      'Bedroom',
      'Bathroom',
    ]
  }
];

export const navigationLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Categories',
    path: '/product/2'
  },
  {
    name: 'Bedroom',
    path: '/product/2'
  },
  {
    name: 'Livingroom',
    path: '/product/2'
  },
];

export const heroBanners = [
  {
    alt: 'Red show curtains',
    src: '/cashmere.jpeg',
    fit: 'object-left',
    title: 'Window Couture: Dressing Your Spaces with Distinctive Flair',
    grayscale: 'grayscale',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAHAAkDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+LHSrjRdN8IjWr6G3/tnU9dj0LTLuK2un/s3daC61C+aBrh7aZoI5IY7ZVSNyZnZV3R+ZX6DTr04YP29Tl9tUxCw9GUYStScoc9Sq1zNS5I8qjHq5N7ps/Ccxw+Y4vPllmFlV+oYPKqmbY6jOvRj9cjDEPDYPCRqqlGrBVqkatSvJuSSowjJuM+U4/wD4SXUP+f7Wv/ALRv8A5Z15/wDaWK/mr/8AgrDf/Lz3v7CwX/QNln/hVmf/AMwg/9k='
  },
  {
    alt: 'Gray curtains',
    src: '/gray.jpeg',
    fit: 'object-center',
    title: 'Most powerful concept',
    subtitle: `Transform your space with our exquisite curtains—where 
    fashion meets function. Elevate ambiance, embrace comfort, 
    and indulge in affordable luxury today!`,
    action: 'BROWSE',
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAHAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD81f8AgnJ+xDd6xqmm6H8fPhasnhyP4b6h/qvEPhma4tdbTU7aaC4Euja1fXBVIBMjNGrDbKAuG3EdF13/AK6mdn+flsbniT9j/wAKQeIteht/g/qsdvDrWqRQRjxR4XYRwx306RIGbWwzbUCrkgE4yRmquvP7/wDgC5fJfgD/2Q=='
  },
]

// prisma queries
export async function getProducts() {
  try {
    return await prisma.product.findMany({
      select: {
        id: true,
        created_at: true,
        updated_at: true,
        title: true,
        price: true,
        rating: true,
        thumbnail: true,
        alt_text: true
      }
    });

  } catch (err) {
    console.error('Failed to fetch products', err);
    throw new Error('Failed to fetch products');
  }
}

export async function getSingleProduct(id: number) {
  id = Number(id);

  try {
    return await prisma.product.findUnique({
      where: { id }
    });

  } catch (err) {
    console.error('Failed to fetch single product', err);
    throw new Error('Failed to fetch single product');
  }
}

export const contactFormDataSchema = z.object({
  name: z.string()
    .max(30, { message: 'Name must be shorter than 30 characters long' })
    .min(3, { message: 'Name must be at lease 3 characters ' }),
  phone: z.string()
    .max(15, { message: 'Phone number must be shorter than 15 characters long' })
    .min(3, { message: 'Phone number is required' }),
  email: z.string().email().max(50, { message: 'Email must be shorter than 50 characters' }),
  message: z.string().max(200, { message: 'Message must be less than 200 characters' })
});
