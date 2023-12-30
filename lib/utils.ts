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

export const highlightDisplay = [
  {
    name: 'CLEW',
    rating: '★★★★★',
    price: '$23',
    imgSrc: '/one.jpg'
  },
  {
    name: 'VASE',
    rating: '★★★★',
    price: '$44',
    imgSrc: '/two.jpg'
  },
  {
    name: 'STORAGE',
    rating: '★★★★★',
    price: '$23',
    imgSrc: '/three.jpg'
  },
  {
    name: 'DECORATIVE CANDLE',
    rating: '★★★★★',
    price: '$23',
    imgSrc: '/four.jpg'
  },
  {
    name: 'HOLDBACK',
    rating: '★★★',
    price: '$23',
    imgSrc: '/five.jpg'
  },
];

export const heroBanners = [
  {
    alt: 'Red show curtains',
    src: '/cashmere.jpg',
    fit: 'object-left',
    title: 'Window Couture: Dressing Your Spaces with Distinctive Flair',
    grayscale: 'grayscale'
  },
  {
    alt: 'Gray curtains',
    src: '/gray.jpg',
    fit: 'object-center',
    title: 'Most powerful concept',
    subtitle: `Transform your space with our exquisite curtains—where 
    fashion meets function. Elevate ambiance, embrace comfort, 
    and indulge in affordable luxury today!`,
    action: 'BROWSE',
  },
]
