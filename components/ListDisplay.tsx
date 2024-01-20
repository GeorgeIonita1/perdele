// add some typescript

import CardMain from "./CardMain";
import { getProducts } from "@/lib/utils";

async function ListDisplay() {
    const data = await getProducts();

    return (
        <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {data.map((data, idx) => (
                <CardMain key={idx} data={data} />
            ))}
        </div>
    );
}

export default ListDisplay;
