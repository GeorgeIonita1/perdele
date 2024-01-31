import { getProducts } from "@/lib/utils";
import GridPreview from "./GridPreview";

async function GridDisplay() {
    const data = await getProducts();

    return (
        <div className="sm:grid grid-cols-2 gap-10 md:grid-cols-4 md:grid-rows-2">
            {data.map(product => (
                <GridPreview key={product.id} data={product} />
            ))}
        </div>
    );
}

export default GridDisplay;
