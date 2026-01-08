import type { Metadata } from "next"; // Added this import
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "TownDrop | Pure Water, Delivered Locally",
  description: "Pharmaceutical-grade water purification and reliable doorstep delivery for your family and office.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans selection:bg-blue-100">
        <Header /> 
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}