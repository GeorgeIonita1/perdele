// add proper typescript

import { getProducts } from "@/lib/utils";
import HighlightSmall from "./HighlightSmall";

async function HighlightDisplay() {
    const data = await getProducts();

    return (
        <div className="sm:grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {data.map((product, idx) => (
                <HighlightSmall key={idx} data={product} />
            ))}
        </div>
    );
}

export default HighlightDisplay;
