import Image from "next/image";
import { Button } from "./ui/button";

function HeroDisplay({ data }: HeroBannerProps) {
    return (
        <div className="h-[60vh] relative">
            <Image
                alt={data.alt}
                src={data.src}
                width={1400}
                height={460}
                placeholder='blur'
                blurDataURL={data.placeholder}
                className={`${data.fit} ${data?.grayscale && data.grayscale}`}
            />
            <div className="container absolute flex flex-col justify-center items-center gap-8 inset-0 text-white text-center max-w-screen-xl">
                <h1 className="text-4xl lg:text-5xl font-bold leading-14">{data.title}</h1>
                {data?.subtitle && <p className="text-xl">{data.subtitle}</p>}
                {data?.action && <Button variant='outline' className="bg-black border-none">{data.action}</Button>}
            </div>
        </div>
    );
}

export default HeroDisplay;
