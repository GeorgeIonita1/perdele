import ProductPreview from "./ProductPreview";
import { getProducts } from "@/lib/utils";

async function ListDisplay() {
    const data = await getProducts();
    console.log(data)

    return (
        <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {data.map(data => (
                <ProductPreview key={data.id} data={data} />
            ))}
        </div>
    );
}

export default ListDisplay;
