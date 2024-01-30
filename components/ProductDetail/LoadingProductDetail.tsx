import LoadingSun from "../LoadingSun";

function LoadingProductDetail() {
    return (
        <div className="animate-pulse md:grid md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
                <LoadingSun />
            </div>

            <div className="col-span-5 flex flex-col justify-center gap-12 max-md:mt-6">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingProductDetail;
