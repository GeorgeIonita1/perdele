import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProductReview from "./ProductReview";
import ProductReviewForm from "./ProductReviewForm";

function ProductAdditionalInformation() {
    return (
        <section>
            <Tabs defaultValue="description">
                <TabsList className="grid w-f grid-cols-3 max-w-lg mb-8">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews (3)</TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Modi vero assumenda expedita eius maiores quasi corrupti
                        laudantium placeat eum itaque.
                    </p>
                </TabsContent>
                <TabsContent value="details">
                    <h3>Details</h3>
                    <div className="flex gap-4">
                        <ul>
                            <li>Fabric</li>
                            <li>Price per cm</li>
                            <li>Color</li>
                            <li>Style</li>
                        </ul>
                        <ul>
                            <li>Cotton</li>
                            <li>1.5 RON</li>
                            <li>red</li>
                            <li>Kitchen</li>
                        </ul>
                    </div>
                </TabsContent>
                <TabsContent value="reviews">
                    <h3 className="mb-6">3 Reviews for this product</h3>
                    <div className="*:mt-4 mb-6">
                        <ProductReview />
                        <ProductReview />
                        <ProductReview />
                    </div>
                    <ProductReviewForm />
                </TabsContent>
            </Tabs>
        </section>
    );
}

export default ProductAdditionalInformation;
