import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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
      'Silk'
    ]
  }
];
