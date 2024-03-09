import { User } from "lucide-react";

function ProductReview() {
    return (
        <div className="flex gap-2">
            <div>
                <User size={62} />
            </div>
            <div>
                <h4>*****</h4>
                <strong>George I - <span>12.12.2024</span></strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus error sint dolores et!</p>
            </div>
        </div>
    );
}

export default ProductReview;
