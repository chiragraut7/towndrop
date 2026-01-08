import React from 'react';

const steps = [
  { id: "01", title: "Dual Media Filtration", desc: "Our industrial-grade sand and gravel layers trap particles down to 20 microns.", icon: "🏔️", color: "from-blue-400 to-blue-600" },
  { id: "02", title: "Activated Carbon Absorption", desc: "High-surface-area carbon removes organic toxins and chlorine for absolute clarity.", icon: "🖤", color: "from-slate-700 to-slate-900" },
  { id: "03", title: "Ionic Softening", desc: "Removing 'hard' minerals to protect the RO membrane and improve mouthfeel.", icon: "🌊", color: "from-cyan-400 to-blue-500" },
  { id: "04", title: "Molecular Reverse Osmosis", desc: "Water is forced through a semi-permeable membrane, rejecting 99.9% of total dissolved solids.", icon: "🧬", color: "from-blue-600 to-indigo-700" },
  { id: "05", title: "UV-C Disinfection", desc: "Short-wave ultraviolet light destroys the DNA of 100% of pathogens without chemicals.", icon: "🟣", color: "from-purple-500 to-indigo-600" },
];

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-100">
      
      {/* 1. HERO: The Laboratory Feel */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-[#f8fafc]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-blue-100 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Pure Grade: 0.01 Micron</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.85]">
              Beyond <br /> <span className="text-blue-600">Standard.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-md leading-relaxed">
              We operate a pharmaceutical-grade facility. Every drop undergoes a 10-step biological and mineral refinement.
            </p>
          </div>
          <div className="relative">
             <div className="w-full aspect-square bg-blue-600/5 rounded-full blur-[120px] absolute inset-0" />
             <div className="relative bg-white/40 backdrop-blur-xl border border-white p-8 rounded-[3rem] shadow-2xl">
                <div className="flex justify-between items-end mb-12">
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live System Status</p>
                      <h3 className="text-3xl font-black text-slate-900">Optimized</h3>
                   </div>
                   <div className="text-right">
                      <p className="text-4xl font-black text-blue-600">18.2</p>
                      <p className="text-[10px] font-bold text-slate-400">TDS LEVEL (mg/L)</p>
                   </div>
                </div>
                <div className="space-y-4">
                   {[1, 2, 3].map((i) => (
                      <div key={i} className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-500 rounded-full" style={{ width: `${80 + (i * 5)}%` }} />
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. THE FLOW: Alternating Cards with Visual Depth */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent hidden lg:block" />
        
        <div className="space-y-40">
          {steps.map((step, idx) => (
            <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className={`w-64 h-64 rounded-[2.5rem] bg-gradient-to-br ${step.color} shadow-2xl flex items-center justify-center text-7xl relative group cursor-default`}>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-[2.5rem] transition-opacity" />
                  <span className="drop-shadow-lg">{step.icon}</span>
                  <div className="absolute -bottom-6 -right-6 text-9xl font-black text-slate-100/50 -z-10 select-none">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">
                  <span className="text-blue-600 mr-4">Step {step.id}.</span> 
                  {step.title}
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {step.desc}
                </p>
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                   <div className="h-px w-12 bg-blue-600" />
                   <span className="text-xs font-black uppercase tracking-widest text-blue-600">Grade Verified</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. THE "GOLD STANDARD": Quality Assurance Section */}
      <section className="mx-6 mb-20">
         <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-500 rounded-full blur-[120px]" />
            </div>
            <div className="relative z-10">
               <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                  Every Drop is <span className="text-blue-400">Tested.</span>
               </h2>
               <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                  Our lab technicians perform hourly tests for pH, TDS, and mineral balance to ensure consistency 365 days a year.
               </p>
               <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
                  View Latest Report
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}