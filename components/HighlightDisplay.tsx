// todo: for loop

import { highlightDisplay } from "@/lib/utils";
import HighlightSmall from "./HighlightSmall";

function HighlightDisplay() {
    function displayItems() {
        const dataToReturn = [];

        for (let i = 0; i < 5; i++) {
            dataToReturn.push(<HighlightSmall data={highlightDisplay[i]} />)
        }

        return dataToReturn;
    }
    return (
        <div className="sm:grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {displayItems()}            
        </div>
    );
}

export default HighlightDisplay;
