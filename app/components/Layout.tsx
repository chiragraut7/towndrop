import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Process', href: '/process' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Sustainability', href: '/eco' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100">
      {/* HEADER */}
      <header className="fixed w-full top-0 z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto backdrop-blur-md bg-white/70 border border-white/40 rounded-full px-8 py-3 flex justify-between items-center shadow-lg">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform">
              <span className="text-white font-bold text-xl -rotate-12 group-hover:rotate-0 transition-transform">💧</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-800">
              TOWN<span className="text-blue-600">DROP</span>
            </span>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition">
                {link.name}
              </Link>
            ))}
            <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all">
              Order Now
            </button>
          </div>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-grow">{children}</main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
          <div>
            <span className="text-2xl font-black tracking-tighter">TOWN<span className="text-blue-400">DROP</span></span>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-xs">
              Bringing premium, 10-step purified water to our local community with zero waste and maximum trust.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-blue-400 uppercase text-xs tracking-widest">Company</h4>
              <Link href="/process" className="text-slate-300 hover:text-white transition">Our Story</Link>
              <Link href="/eco" className="text-slate-300 hover:text-white transition">Green Mission</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-blue-400 uppercase text-xs tracking-widest">Help</h4>
              <Link href="/support" className="text-slate-300 hover:text-white transition">WhatsApp</Link>
              <Link href="/support" className="text-slate-300 hover:text-white transition">FAQs</Link>
            </div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl">
            <h4 className="font-bold mb-2">Subscribe to News</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-slate-700 border-none rounded-lg px-4 py-2 w-full focus:ring-2 ring-blue-500 outline-none" />
              <button className="bg-blue-600 px-4 py-2 rounded-lg">Go</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between text-slate-500 text-xs">
          <p>© 2026 TownDrop Water Technologies. Built for [Your Town].</p>
          <p>Privacy Policy • Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;