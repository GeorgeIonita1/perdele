import { fallbackText } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function GridPreview({ data }: { data: Product }) {
    return (
        <Link
            href={`/product/${data.id}`}
            className="highlight-item max-sm:mb-10 block"
        >
            <div className="relative overflow-hidden">
                <Image
                    alt={data.alt_text ?? fallbackText}
                    src={data.thumbnail ?? ''}
                    height={800}
                    width={800}
                />
                <div className="shadow absolute inset-0 flex flex-col justify-center items-center *:text-lg">
                    <h3 className="font-bold">{data.title}</h3>
                    <h4>{data.rating}</h4>
                    <h4>{data.price}</h4>
                </div>
            </div>
        </Link>
    );
}

export default GridPreview;
