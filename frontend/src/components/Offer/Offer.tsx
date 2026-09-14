import { Tag, Truck, Zap } from "lucide-react";

function Offer() {
    return (
        <div className="border-b border-white/10 bg-slate-950 text-white">
            <div className="mx-auto flex min-h-11 max-w-7xl items-center justify-center gap-5 px-4 text-xs font-semibold tracking-wide sm:text-sm">
                <div className="flex items-center gap-2 transition-colors hover:text-orange-300">
                    <Truck size={15} className="text-orange-400" />
                    <span>Free worldwide shipping over $100</span>
                </div>

                <span className="hidden h-1 w-1 rounded-full bg-orange-400 md:block" />

                <div className="hidden items-center gap-2 transition-colors hover:text-orange-300 md:flex">
                    <Tag size={15} className="text-orange-400" />
                    <span>Summer sale: up to 50% off</span>
                </div>

                <span className="hidden h-1 w-1 rounded-full bg-orange-400 lg:block" />

                <div className="hidden items-center gap-2 transition-colors hover:text-orange-300 lg:flex">
                    <Zap size={15} className="text-orange-400" />
                    <span>Limited time offer</span>
                </div>
            </div>
        </div>
    )
}

export default Offer