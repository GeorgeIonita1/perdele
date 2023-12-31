interface FooterLink {
    title: string;
    lines: string[];
}

interface DummyData {
    title: string;
    imaSrc: string;
    id: number;
    price: string,
    oldPrice: string;
}

interface CardMainProps {
    data: DummyData;
}

interface HighlightSmall {
    name: string;
    rating: string;
    price: string;
    imgSrc: string;
}

interface HighlightSmallProps {
    data: HighlightSmall;
}

interface HeroBanner {
    alt: string;
    src: string;
    fit: string;
    title: string;
    subtitle?: string;
    action?: string;
    grayscale?: string;
}

interface HeroBannerProps {
    data: HeroBanner;
}

interface NavigationLink {
    name: string;
    path: string;
}
