import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">💧</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">
                TOWN<span className="text-blue-400">DROP</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Providing small towns with pharmaceutical-grade water purification and reliable doorstep delivery. 
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-blue-400 uppercase text-xs tracking-widest mb-6">Service</h4>
            <ul className="flex flex-col gap-4 text-slate-300 text-sm font-medium">
              <li><Link href="/process" className="hover:text-white transition">Filtration Process</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Monthly Plans</Link></li>
              <li><Link href="/support" className="hover:text-white transition">Track Order</Link></li>
            </ul>
          </div>

          {/* Legal/Company */}
          <div>
            <h4 className="font-bold text-blue-400 uppercase text-xs tracking-widest mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-slate-300 text-sm font-medium">
              <li><Link href="/about" className="hover:text-white transition">Our Story</Link></li>
              <li><Link href="/eco" className="hover:text-white transition">Sustainability</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Local Trust/Contact */}
          <div>
            <h4 className="font-bold text-blue-400 uppercase text-xs tracking-widest mb-6">Connect</h4>
            <p className="text-slate-400 text-sm mb-4">Based in [Your Town Name]. Available 7:00 AM - 9:00 PM.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
                <span className="text-sm">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
                <span className="text-sm">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
                <span className="text-sm">WA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold tracking-wide uppercase">
          <p>© 2026 TownDrop Water Co. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}