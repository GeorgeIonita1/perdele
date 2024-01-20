// add proper typescript

import { getProducts } from "@/lib/utils";
import GridPreview from "./GridPreview";

async function GridDisplay() {
    const data = await getProducts();

    return (
        <div className="sm:grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {data.map((product, idx) => (
                <GridPreview key={idx} data={product} />
            ))}
        </div>
    );
}

export default GridDisplay;
