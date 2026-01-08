import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Move the links outside the component so they aren't re-created on every render
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Process', href: '/process' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Sustainability', href: '/eco' },
  { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto backdrop-blur-md bg-white/70 border border-white/40 rounded-full px-8 py-3 flex justify-between items-center shadow-lg">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
           <Image 
          src="/images/logo.png"    // Path starts from the 'public' folder
          alt="SunSet Residency Logo"
          width={180}                // Adjust width to match your design
          height={60}                // Adjust height to match your design
          priority                   // Ensures the logo loads instantly
          className="object-contain" // Keeps the logo from stretching
        />
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold text-slate-500 hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
          
          <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
            Order Now
          </button>
        </div>
        
      </nav>
    </header>
  );
}