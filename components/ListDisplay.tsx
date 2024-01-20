// add some typescript

import prisma from "@/prisma/prisma";
import CardMain from "./CardMain";

async function getData() {
    try {
        const res = await prisma.product.findMany();

        console.log(res);

        return res;
    } catch (err) {
        console.error('Failed to fetch products', err);
        throw new Error('Failed to fetch products');
    }
}

async function ListDisplay() {
    const data = await getData();

    return (
        <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {data.map((data: any, idx: number): any => (
                <CardMain key={idx} data={data} />
            ))}
        </div>
    );
}

export default ListDisplay;
