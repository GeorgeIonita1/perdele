import ProductAdditionalInformation from "@/components/Product/ProductAdditionalInformation";
import ProductDetailHeader from "@/components/Product/ProductHeader";
import ProductRecommendedProducts from "@/components/Product/ProductRecommendedProducts";
import { getSingleProduct } from "@/lib/utils";

async function ProductDetailPage({ params }: { params: { id: string } }) {
    const parameter = Number(params.id);
    const product = await getSingleProduct(parameter) as Product;

    return (
        <div className="container">
            <ProductDetailHeader product={product} />
            <ProductAdditionalInformation />
            <ProductRecommendedProducts />
        </div>
    );
}

export default ProductDetailPage;
