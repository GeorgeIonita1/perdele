interface FooterLink {
    title: string;
    lines: string[];
}

interface HeroBanner {
    alt: string;
    src: string;
    fit: string;
    title: string;
    subtitle?: string;
    action?: string;
    grayscale?: string;
    placeholder?: string;
}

interface HeroBannerProps {
    data: HeroBanner;
}

interface NavigationLink {
    name: string;
    path: string;
}

interface Product {
    id: number;
    title: string;
    price: number;
    alt_text?: string;
    description?: string;
    rating?: string | null;
    thumbnail?: string | null;
}
