import { Sun } from "lucide-react";

function LoadingSun() {
    return (
        <div className="animate-pulse aspect-square bg-slate-900 flex justify-center items-center rounded-xl">
            <Sun size={64} color="#eab308" />
        </div>
    );
}

export default LoadingSun;
