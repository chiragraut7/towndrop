'use client';

import React, { useState } from 'react';

const plans = [
  {
    name: "Starter Drop",
    price: 5,
    unit: "per can",
    desc: "Perfect for occasional use or testing the waters.",
    features: ["Standard 20L Can", "Next-Day Delivery", "No Subscription", "BPA-Free Bottle"],
    featured: false,
    button: "Order Once"
  },
  {
    name: "Family Refresh",
    price: 45,
    unit: "per month",
    desc: "Our most popular plan for healthy households.",
    features: ["10 Cans Per Month", "Priority 2hr Delivery", "Free Dispenser Rental", "Eco-Bonus: 400 Bottles Saved"],
    featured: true,
    button: "Start Free Trial"
  },
  {
    name: "Business Flow",
    price: 120,
    unit: "per month",
    desc: "High-volume hydration for offices and gyms.",
    features: ["30 Cans Per Month", "Dedicated Account Manager", "Dual Dispenser Setup", "Monthly Quality Reports"],
    featured: false,
    button: "Contact Sales"
  }
];

export default function PricingPage() {
  const [bottles, setBottles] = useState(20);
  const costPerSmallBottle = 0.50; // Cost of a 500ml bottle
  const townDropEquivalent = (bottles * costPerSmallBottle).toFixed(2);
  const savings = (Number(townDropEquivalent) - (bottles * 0.15)).toFixed(2); // Estimated savings

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="pt-40 pb-20 px-6 water-wave text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
          Transparent <span className="text-blue-600">Pricing.</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Choose a plan that fits your hydration needs. No hidden fees, no long-term contracts. Just pure water.
        </p>
      </section>

      {/* 2. Interactive Savings Calculator */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">The Savings Calculator</h3>
              <p className="text-slate-400 mb-8">Move the slider to see how much you save by switching from small plastic bottles to TownDrop.</p>
              <input 
                type="range" 
                min="10" 
                max="200" 
                value={bottles} 
                onChange={(e) => setBottles(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between mt-4 text-xs font-bold text-slate-500 uppercase">
                <span>10 Bottles</span>
                <span>200 Bottles</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm uppercase font-bold tracking-widest">Estimated Monthly Savings</p>
              <h2 className="text-6xl md:text-7xl font-black text-blue-400 mt-2">${savings}</h2>
              <p className="text-slate-500 text-xs mt-4 italic">Calculated based on average local retail prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Cards */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative p-10 rounded-[3rem] transition-all duration-500 border-2 ${
                plan.featured 
                ? 'bg-white border-blue-600 shadow-2xl scale-105 z-10' 
                : 'bg-slate-50 border-transparent hover:border-slate-200'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                  Best Value
                </span>
              )}
              <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-black text-slate-900">${plan.price}</span>
                <span className="text-slate-400 font-bold ml-2">{plan.unit}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                    <span className="text-blue-500 font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${
                plan.featured 
                ? 'blue-gradient text-white shadow-xl shadow-blue-200 hover:brightness-110' 
                : 'bg-slate-900 text-white hover:bg-blue-600'
              }`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}