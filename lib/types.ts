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
