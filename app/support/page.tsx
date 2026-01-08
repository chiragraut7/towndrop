'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I schedule my first delivery?",
    answer: "Simply choose a plan on our Pricing page or click 'Order Now'. Once you've checked out, you'll receive a WhatsApp confirmation to set your preferred delivery window."
  },
  {
    question: "Is there a deposit for the 20L cans?",
    answer: "We collect a small one-time refundable security deposit for the bottle shell. This ensures we can keep our circular ecosystem sustainable and clean."
  },
  {
    question: "What is the quality of the water?",
    answer: "Our water undergoes a rigorous 10-step purification process, including Reverse Osmosis, UV-C sterilization, and Ozonation, meeting international standards."
  },
  {
    question: "What if I'm not home during delivery?",
    answer: "No problem! Most of our neighbors leave their empty cans outside their door. Our delivery partners will swap them for fresh ones and send you a photo confirmation."
  }
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-40 pb-20 px-6 water-wave text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Help Center</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tighter text-slate-900">
            We're here to <br /> <span className="text-blue-600">help you.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Have questions about your delivery or our purification process? Browse our FAQs below or chat with our local team.
          </p>
        </div>
      </section>

      {/* 2. FAQ Accordion */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border-2 rounded-3xl transition-all duration-300 ${openIndex === idx ? 'border-blue-600 bg-blue-50/30' : 'border-slate-100 bg-white hover:border-blue-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                <span className={`text-2xl transition-transform duration-300 ${openIndex === idx ? 'rotate-45 text-blue-600' : 'text-slate-400'}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48 pb-6 px-6' : 'max-h-0'}`}>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Contact Methods */}
      <section className="py-20 px-6 bg-slate-50 rounded-t-[4rem]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6">💬</div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">WhatsApp Support</h3>
            <p className="text-slate-500 mb-8 font-medium">Fastest response for delivery changes or urgent refills.</p>
            <button className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-100">
              Open WhatsApp
            </button>
          </div>
          <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6">📧</div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Email Ticketing</h3>
            <p className="text-slate-500 mb-8 font-medium">Best for billing inquiries or corporate partnership requests.</p>
            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition shadow-lg shadow-slate-200">
              Send Email
            </button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] group flex items-center gap-3"
      >
        <span className="bg-white px-4 py-2 rounded-full shadow-xl text-sm font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity border border-slate-100">
          Chat with us
        </span>
        <div className="w-16 h-16 bg-emerald-500 rounded-full shadow-2xl flex items-center justify-center text-white text-3xl hover:scale-110 transition-transform active:scale-95">
          <span className="relative flex h-3 w-3 absolute top-3 right-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          📱
        </div>
      </a>
    </div>
  );
}