import LoadingSun from "../LoadingSun";

function ListLoading() {
    return (
        <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {Array(6).fill('6').map((el, idx) => (
                <LoadingSun key={idx} />
            ))}
        </div>
    );
}

export default ListLoading;
