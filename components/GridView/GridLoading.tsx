import LoadingSun from "../LoadingSun";

function GridLoading() {
    return (
        <div className="sm:grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {Array(5).fill('re').map((el, idx) => (
                <div key={idx} className="highlight-item">
                    <LoadingSun />
                </div>
            ))}
        </div>
    );
}

export default GridLoading;
