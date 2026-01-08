'use client';

import React from 'react';

const sections = [
  { id: "service", title: "1. Service Description", content: "TownDrop provides 10-step purified water delivery in 20L reusable cans. Services include scheduled refills, dispenser rentals, and quality maintenance." },
  { id: "subscriptions", title: "2. Subscriptions", content: "Monthly plans are billed in advance. You can upgrade, downgrade, or pause your subscription at any time via the WhatsApp support channel or your dashboard." },
  { id: "deposits", title: "3. Bottle Deposits", content: "A refundable security deposit is charged for each 20L bottle shell. This deposit is returned in full upon the return of the undamaged bottle and termination of service." },
  { id: "delivery", title: "4. Delivery Policy", content: "Deliveries are made within the 2-hour window selected during checkout. Customers are responsible for ensuring access to the drop-off location." },
  { id: "safety", title: "5. Health & Safety", content: "Our water meets all local health standards. Once delivered, customers are responsible for maintaining the cleanliness of their dispensers to ensure water safety." },
];

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="pt-40 pb-20 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Legal Framework</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6">
            Terms of <span className="text-blue-600">Service.</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">
            Last updated: January 2026. Please read these terms carefully before using TownDrop services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Side Navigation (Desktop Only) */}
          <aside className="hidden lg:block w-1/4 sticky top-32 h-fit">
            <nav className="space-y-4">
              {sections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`} 
                  className="block text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
            <div className="mt-12 p-6 bg-blue-50 rounded-3xl border border-blue-100">
              <p className="text-xs font-bold text-blue-700 leading-relaxed">
                Need a summary? Contact our legal team at legal@towndrop.com
              </p>
            </div>
          </aside>

          {/* Terms Content */}
          <div className="lg:w-3/4 space-y-16">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32">
                <h3 className="text-2xl font-black text-slate-900 mb-6">{section.title}</h3>
                <p className="text-slate-600 leading-[1.8] text-lg">
                  {section.content}
                </p>
                <div className="mt-8 h-px w-full bg-slate-100" />
              </div>
            ))}

            {/* Disclaimer Box */}
            <div className="p-8 md:p-12 bg-slate-900 rounded-[3rem] text-white">
              <h4 className="text-xl font-bold mb-4">Acceptance of Terms</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                By clicking "Order Now" or using any TownDrop service, you agree to be bound by these terms. We reserve the right to update these terms to reflect changes in local water regulations or delivery technology.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}