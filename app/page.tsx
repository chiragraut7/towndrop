import React from 'react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 water-wave overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              DELIVERING NOW IN YOUR AREA
            </div>
            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              Pure Hydration <br />
              <span className="text-transparent bg-clip-text blue-gradient">For Your Family.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg">
              TownDrop brings pharmaceutical-grade purification to your doorstep. Schedule your 20L refills in
              seconds and never run out of crisp, clean water again.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="blue-gradient text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-blue-200 hover:brightness-110 transition">
                Start Free Trial
              </button>
              <div className="flex items-center gap-4 px-6">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?u=1" className="w-10 h-10 rounded-full border-2 border-white" alt="user" />
                  <img src="https://i.pravatar.cc/100?u=2" className="w-10 h-10 rounded-full border-2 border-white" alt="user" />
                  <img src="https://i.pravatar.cc/100?u=3" className="w-10 h-10 rounded-full border-2 border-white" alt="user" />
                </div>
                <span className="text-sm font-semibold text-slate-500">4.9/5 by 2k+ neighbors</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-72 h-[450px] bg-blue-100 rounded-[3rem] border-8 border-slate-900 relative overflow-hidden shadow-2xl floating">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full mb-4 shadow-lg flex items-center justify-center">
                  <span className="text-white text-3xl">💧</span>
                </div>
                <div className="text-slate-800 font-bold text-xl">Ordering...</div>
                <div className="w-full bg-slate-200 h-2 rounded-full mt-4 overflow-hidden">
                  <div className="bg-blue-600 h-full w-2/3"></div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 -top-10"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Filtration Process", value: "10-Step" },
            { label: "Avg. Delivery Time", value: "2 Hours" },
            { label: "Chlorine & Lead", value: "0%" },
            { label: "WhatsApp Support", value: "24/7" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-black text-slate-900">{stat.value}</div>
              <div className="text-sm font-bold text-blue-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Why Neighbors Choose TownDrop</h2>
          <p className="text-slate-500">Modern water delivery built for the convenience of a small town.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="🚛" 
            title="Smart Scheduling" 
            desc="Set your delivery days once. Our smart system ensures your cans arrive before you run out."
            color="bg-blue-600"
          />
          <FeatureCard 
            icon="♻️" 
            title="Eco-Friendly" 
            desc="Each 20L can replaces 40 small plastic bottles. We clean, sanitize, and reuse every container."
            color="bg-emerald-500"
          />
          <FeatureCard 
            icon="💎" 
            title="Purest Minerals" 
            desc="We don't just strip water; we add back the essential electrolytes your body needs to thrive."
            color="bg-purple-600"
          />
        </div>
      </section>
    </>
  );
}

// Reusable Feature Card Component
function FeatureCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition duration-500 group border border-transparent hover:border-blue-100">
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition`}>
        <span className="text-2xl text-white">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}