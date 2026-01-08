'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-50 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-100 rounded-full blur-[100px] opacity-40 animate-pulse delay-1000" />
      </div>

      <section className="pt-44 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* 1. The "Black Label" Info Card */}
            <div className="lg:w-2/5 bg-slate-900 rounded-[3.5rem] p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full -mr-20 -mt-20" />
              
              <div className="relative z-10">
                <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px]">Direct Channel</span>
                <h2 className="text-5xl font-black mt-4 mb-8 tracking-tighter">Talk to the <br/> <span className="text-blue-400">Source.</span></h2>
                
                <div className="space-y-10 mt-16">
                  <ContactItem icon="💧" title="Local HQ" detail="123 Hydration Way, Sector 4, Aqua City" />
                  <ContactItem icon="📱" title="WhatsApp" detail="+1 (555) 000-DROP" />
                  <ContactItem icon="✉️" title="General" detail="hello@towndrop.com" />
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-slate-800 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700" />
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-medium">Join 2,000+ happy neighbors</p>
              </div>
            </div>

            {/* 2. The Glassmorphic Form Card */}
            <div className="lg:w-3/5 bg-white/40 backdrop-blur-2xl border border-white rounded-[3.5rem] p-10 md:p-16 shadow-xl relative">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-blue-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl mb-8">
                    <span className="text-white text-4xl -rotate-12">🌊</span>
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Message Flowing!</h3>
                  <p className="text-slate-500 max-w-xs">Our team has been notified. We usually respond within 60 minutes.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-10 font-bold text-blue-600 hover:text-blue-700 transition">Back to form</button>
                </div>
              ) : (
                <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <CustomInput label="Your Name" placeholder="Alexander Drop" type="text" />
                    <CustomInput label="Email Address" placeholder="alex@flow.com" type="email" />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Inquiry Type</label>
                    <div className="flex flex-wrap gap-3">
                      {['Home Refill', 'Office Plan', 'Feedback'].map(type => (
                        <button key={type} type="button" className="px-6 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:border-blue-500 hover:text-blue-600 transition">
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                    <textarea 
                      rows={4} 
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] p-6 outline-none transition-all resize-none font-medium" 
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button className="w-full blue-gradient text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                    Send Inquiry <span>→</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-components for cleaner code
function ContactItem({ icon, title, detail }: { icon: string, title: string, detail: string }) {
  return (
    <div className="flex gap-6 group cursor-default">
      <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl group-hover:bg-blue-600 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-lg font-bold">{detail}</p>
      </div>
    </div>
  );
}

function CustomInput({ label, placeholder, type }: { label: string, placeholder: string, type: string }) {
  return (
    <div className="space-y-3 w-full">
      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-medium"
      />
    </div>
  );
}