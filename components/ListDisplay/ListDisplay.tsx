import ProductPreview from "../ProductPreview";
import { getProducts } from "@/lib/utils";

async function ListDisplay() {
    const data = await getProducts();

    return (
        <div className="grid md:grid-cols-2 gap-4 md:gap-10 lg:grid-cols-3">
            {data.map(data => (
                <ProductPreview key={data.id} data={data} />
            ))}
        </div>
    );
}

export default ListDisplay;
