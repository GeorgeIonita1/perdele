import Image from "next/image";

function HeroDisplay() {
    return (
        <div className="hero-display h-screen relative">
            <div className="h-full">
                <Image
                    alt="Beautiful sunsite through curtains"
                    src='/Hero.jpg'
                    width={1400}
                    height={860}
                    className="h-full object-cover object-right"
                />
            </div>
            <div className="absolute flex flex-col justify-center inset-0 px-6 text-5xl font-extrabold text-white max-w-lg leading-14">
                <h1>Window Couture: Dressing Your Spaces with Distinctive Flair</h1>
            </div>
        </div>
    );
}

export default HeroDisplay;
