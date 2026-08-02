import { Truck, Pizza, Zap } from 'lucide-react'
import React from 'react'

function Offer() {
    return (
        <div className="bg-zinc-800 text-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-center gap-6 px-4 text-sm font-medium">
        <div className="flex items-center gap-2 transition hover:text-orange-500">
          <Truck size={16} />
          <span>Free Worldwide Shipping Over $100</span>
        </div>

        <span className="hidden md:block text-white/50">|</span>

        <div className="hidden items-center gap-2 md:flex transition hover:text-orange-500">
          <Pizza size={16} />
          <span>Summer Sale: Up to 50% Off</span>
        </div>

        <span className="hidden md:block text-white/50">|</span>

        <div className="hidden items-center gap-2 lg:flex transition hover:text-orange-500">
          <Zap size={16} />
          <span>Limited Time Offer</span>
        </div>
      </div>
    </div>
    )
}

export default Offer