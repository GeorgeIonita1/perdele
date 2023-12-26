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

export const dummyData: DummyData[] = [
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpg',
    id: 1,
    price: '$130.00',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpg',
    id: 2,
    price: '$130.00',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpg',
    id: 3,
    price: '$130.00',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpg',
    id: 4,
    price: '$130.00',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpg',
    id: 5,
    price: '$130.00',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpg',
    id: 6,
    price: '$130.00',
    oldPrice: '$220.00'
  },
  {
    title: 'Perdea Sufragerie',
    imaSrc: '/perdele.jpg',
    id: 7,
    price: '$130.00',
    oldPrice: '$220.00'
  },
];
