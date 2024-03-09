import { getProducts } from "@/lib/utils";
import ProductPreview from "../ProductPreview";

async function ProductRecommendedProducts() {
    const data = await getProducts();

    return (
        <section>
            <h3>Related products</h3>
            <div className="grid md:grid-cols-2 md:gap-4 md:gap-10 lg:grid-cols-3">
                {data.map(data => (
                    <ProductPreview key={data.id} data={data} />
                ))}
            </div>
        </section>
    );
}

export default ProductRecommendedProducts;
