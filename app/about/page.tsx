import React from 'react';

const milestones = [
  { year: "2023", title: "The Inspiration", desc: "TownDrop started in a small kitchen after realizing our local community lacked a reliable source of pharmaceutical-grade water that wasn't wrapped in single-use plastic." },
  { year: "2024", title: "Pure Hub Alpha", desc: "We built our first high-tech purification center, combining 10-step RO technology with a localized delivery network." },
  { year: "2025", title: "2,000+ Families", desc: "Today, we serve our entire town, replacing over 100,000 plastic bottles annually with our circular 20L system." }
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero: The "Why" */}
      <section className="pt-48 pb-32 px-6 water-wave overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Origin</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.85]">
            Born in <br /> <span className="text-blue-600">This Town.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We aren't a global conglomerate. We are your neighbors, dedicated to the idea that pure water should be local, sustainable, and high-tech.
          </p>
        </div>
      </section>

      {/* 2. The Vision: Large Visual Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10 opacity-10" />
            <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl flex items-center justify-center text-9xl">
              🏘️
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-50 hidden md:block">
              <p className="text-4xl font-black text-blue-600">100%</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Local Ownership</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">The Mission Beyond the Bottle.</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              When we started TownDrop, we saw how many single-use plastic bottles were filling up our local parks and drains. We knew there was a better way—one that combined the convenience of delivery with the quality of a laboratory.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Our goal isn't just to sell water; it's to create a circular ecosystem where every 20L can is a step toward a plastic-free future for our children.
            </p>
            <div className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900" />
                <div>
                  <p className="font-bold text-slate-900">Founder Name</p>
                  <p className="text-xs text-slate-400 uppercase font-black">Chief Hydration Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Timeline: Milestones */}
      <section className="py-32 bg-slate-900 text-white rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tight">How we grew.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative p-8 border-l border-slate-800 hover:border-blue-500 transition-colors group">
                <span className="text-blue-500 font-black text-xs uppercase tracking-widest block mb-4 group-hover:scale-110 transition-transform">{m.year}</span>
                <h4 className="text-2xl font-bold mb-4">{m.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Commitment Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h3 className="text-3xl font-black text-slate-900 mb-6">Our Core Values</h3>
          <div className="space-y-6">
             <ValueItem title="Obsessive Quality" desc="If it's not pharmaceutical grade, it's not TownDrop." />
             <ValueItem title="Doorstep Reliability" desc="Rain or shine, your hydration is our priority." />
             <ValueItem title="Radical Transparency" desc="You are always welcome to visit our purification hub." />
          </div>
        </div>
        <div className="bg-blue-50 p-12 rounded-[3.5rem] flex flex-col justify-center items-center text-center">
           <span className="text-6xl mb-6">💧</span>
           <h3 className="text-2xl font-black text-slate-900 mb-4">Want to see the tech?</h3>
           <p className="text-slate-500 mb-8">Take a virtual tour of our 10-step purification hub.</p>
           <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 transition">
              Watch Process Video
           </button>
        </div>
      </section>
    </div>
  );
}

function ValueItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="group">
      <h5 className="font-black text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h5>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  )
}