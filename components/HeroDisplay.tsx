import Image from "next/image";
import { Button } from "./ui/button";

function HeroDisplay({ data }: HeroBannerProps) {
    return (
        <div className="h-96 relative">
            <Image
                alt={data.alt}
                src={data.src}
                width={1400}
                height={460}
                className={`${data.fit} ${data?.grayscale && data.grayscale}`}
            />
            <div className="container absolute flex flex-col justify-center items-center gap-8 inset-0 text-white text-center max-w-screen-xl">
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-14">{data.title}</h1>
                {data?.subtitle && <p className="text-xl">{data.subtitle}</p>}
                {data?.action && <Button variant='outline' className="bg-black border-none">{data.action}</Button>}
            </div>
        </div>
    );
}

export default HeroDisplay;
