import React from 'react';

const ecoStats = [
  { label: "Plastic Saved", value: "2.4 Tons", desc: "Estimated plastic removed from local landfills this year." },
  { label: "CO2 Reduction", value: "15%", desc: "Lowered carbon footprint via optimized local delivery routes." },
  { label: "Bottle Life", value: "50+ Uses", desc: "Each 20L can is sanitized and reused dozens of times." },
];

export default function EcoPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section: The "Green" Message */}
      <section className="pt-40 pb-20 px-6 bg-emerald-50/50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6">
              🌱 PLANET-FIRST HYDRATION
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
              Purity for you. <br />
              <span className="text-emerald-600">Peace for Earth.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
              TownDrop was founded on a simple realization: you shouldn't have to choose between clean water and a clean planet. Our circular delivery model is designed to end single-use plastic.
            </p>
            <div className="flex gap-4">
               <div className="p-4 bg-white rounded-2xl shadow-sm border border-emerald-100">
                  <p className="text-2xl font-bold text-emerald-600">40</p>
                  <p className="text-xs font-medium text-slate-500 uppercase">Bottles saved per can</p>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-emerald-200/40 rounded-full blur-3xl absolute -z-10 animate-pulse" />
             <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-emerald-50 text-center">
                <span className="text-8xl block mb-6">♻️</span>
                <h3 className="text-2xl font-bold text-slate-900">The 20L Impact</h3>
                <p className="text-slate-500 mt-4 italic">"One refill at a time, we are healing our local environment."</p>
             </div>
          </div>
        </div>
      </section>

      {/* 2. The Circular Model Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4">Our Circular Ecosystem</h2>
          <p className="text-slate-500">How we manage our bottles to ensure zero waste.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            { step: "1. Delivery", icon: "🚚", desc: "We deliver full 20L cans to your door and collect the empties." },
            { step: "2. Sterilization", icon: "🧼", desc: "Each bottle undergoes a high-temp, multi-stage sanitization." },
            { step: "3. Refill", icon: "💧", desc: "Bottles are refilled with 10-step purified water and resealed." },
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl hover:bg-emerald-50 transition-colors duration-500">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-xl font-bold mb-3">{item.step}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Real-Time Impact Stats */}
      <section className="py-20 px-6 bg-slate-900 text-white rounded-[4rem] mx-6 mb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {ecoStats.map((stat, i) => (
            <div key={i} className="text-center md:text-left border-l border-slate-700 pl-8">
              <h2 className="text-5xl font-black text-emerald-400 mb-2">{stat.value}</h2>
              <h4 className="text-lg font-bold mb-2">{stat.label}</h4>
              <p className="text-slate-400 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Commitment Note */}
      <section className="pb-32 px-6 text-center max-w-3xl mx-auto">
         <h2 className="text-3xl font-bold mb-6">Our 2030 Commitment</h2>
         <p className="text-slate-600 leading-relaxed mb-10">
            By 2030, TownDrop aims to be a carbon-negative company. We are currently transitioning our local delivery fleet to electric vehicles and powering our purification hubs with solar energy.
         </p>
         <button className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition transform hover:scale-105">
            Download Sustainability Report
         </button>
      </section>
    </div>
  );
}