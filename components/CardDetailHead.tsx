import Image from "next/image";

function CardDetailHead() {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5">
                <Image alt="Imagine cu perdele" src='/perdele.jpg' height={900} width={600} />
            </div>
            <div className="col-span-7 flex flex-col gap-4">
                <h2 className="font-extrabold text-2xl">Product Title</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Nostrum inventore libero maxime, iusto consequatur 
                    voluptatibus necessitatibus facere, quaerat, 
                    assumenda tenetur voluptatem deserunt numquam quisquam 
                    nihil quas! Consequatur corrupti maxime accusantium!
                </p>
                <span className="block">$150.00 <s>$210.00</s></span>
                <div className="w-full h-px bg-slate-950" />
                <div className="flex gap-6">
                    <small>SKU: 38495</small>
                    <small>Brand: Nutline</small>
                    <small>Category: Face</small>
                </div>
            </div>
        </div>
    );
}

export default CardDetailHead;
