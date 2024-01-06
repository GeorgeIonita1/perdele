import Image from "next/image";

function CardDetailHead() {
    return (
        <div className="md:grid md:grid-cols-12 md:gap-16">
            <div className="col-span-5 aspect-square">
                <Image 
                    alt="Imagine cu perdele" 
                    src='/perdele.jpg' 
                    height={768} 
                    width={768}
                    placeholder="blur"
                    blurDataURL='/perdele.jpg'
                />
            </div>
            <div className="col-span-7 flex flex-col gap-12 max-md:mt-6">
                <h1 className="font-extrabold text-4xl">Product Title</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Nostrum inventore libero maxime, iusto consequatur 
                    voluptatibus necessitatibus facere, quaerat, 
                    assumenda tenetur voluptatem deserunt numquam quisquam 
                    nihil quas! Consequatur corrupti maxime accusantium!
                </p>
                <span className="block font-bold text-xl">$150.00 <s>$210.00</s></span>
                <div className="flex flex-col gap-2">
                    <small>SKU: 38495</small>
                    <small>Brand: Nutline</small>
                    <small>Category: Face</small>
                </div>
            </div>
        </div>
    );
}

export default CardDetailHead;
