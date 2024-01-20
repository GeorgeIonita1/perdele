import Image from "next/image";
import Link from "next/link";

function GridPreview({ data }: any) {
    return (
        <Link
            href='/product/2'
            className="highlight-item max-sm:py-6 grid overflow-hidden relative"
        >
            <Image
                alt="Perdea alba" src={data?.thumbnail}
                height={800}
                width={800}
            />
            <div className="shadow absolute inset-0 flex flex-col justify-center items-center *:text-lg">
                <div className="flex flex-col justify-center items-center relative">
                    <h3 className="font-bold">{data.title}</h3>
                    <h4>{data.rating}</h4>
                    <h4>{data.price}</h4>
                </div>
            </div>
        </Link>
    );
}

export default GridPreview;