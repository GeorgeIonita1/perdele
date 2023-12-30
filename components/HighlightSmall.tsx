import Image from "next/image";
import Link from "next/link";

function HighlightSmall({ data }: HighlightSmallProps) {
    return (
        <Link href='/detail/2'>
            <div className="max-sm:py-6 highlight-item grid relative overflow-hidden">
                <div className="image-wrapper relative">
                    <Image 
                        alt="Perdea alba" src={data.imgSrc} 
                        height={800}
                        width={800}
                    />
                </div>
                <div className="shadow absolute inset-0 flex flex-col justify-center items-center">
                    <h3>{data.name}</h3>
                    <h4>{data.rating}</h4>
                    <h4>{data.price}</h4>
                </div>          
            </div>
        </Link>
    );
}

export default HighlightSmall;
