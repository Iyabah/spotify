import React from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

function Navbar() {
  return (
    <nav className="navbar fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3 flex items-center justify-between glass-card border border-white/20 shadow-lg" style={{ borderRadius: 50 }}>
      <div className="flex items-center gap-3">
        <svg width="36" height="36" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <circle cx="84" cy="84" r="84" fill="#1DB954"/>
          <path d="M120.1 116.2c-1.7 2.8-5.3 3.7-8.1 2-22.2-13.6-50.2-16.7-83.2-9.2-3.2.7-6.4-1.3-7.1-4.5-.7-3.2 1.3-6.4 4.5-7.1 35.5-7.9 66.2-4.4 90.5 10.4 2.8 1.7 3.7 5.3 2 8.1zm11.6-23.2c-2.1 3.4-6.5 4.5-9.9 2.4-25.4-15.6-64.2-20.1-94.2-11.1-3.8 1.1-7.8-1.1-8.9-4.9-1.1-3.8 1.1-7.8 4.9-8.9 33.8-9.8 75.1-5 103.6 12.2 3.4 2.1 4.5 6.5 2.4 9.9zm13.2-26.2c-30.1-18.1-79.7-19.8-108.2-11.1-4.4 1.3-9-1.2-10.3-5.6-1.3-4.4 1.2-9 5.6-10.3 31.8-9.5 85.1-7.6 119.7 12.2 4 2.4 5.3 7.6 2.9 11.6-2.4 4-7.6 5.3-11.6 2.9z" fill="#fff"/>
        </svg>
        <span className="text-xl font-bold text-gradient">Spotify Migrator</span>
      </div>
      <ul className="flex gap-6 text-white/90 font-medium text-base">
        <li><a href="/" className="hover:bg-white/20 px-4 py-2 rounded-2xl transition">Home</a></li>
        <li><a href="/migrate" className="hover:bg-white/20 px-4 py-2 rounded-2xl transition">Migrate</a></li>
        <li><a href="#about" className="hover:bg-white/20 px-4 py-2 rounded-2xl transition">About</a></li>
        <li><a href="/login" className="hover:bg-white/20 px-4 py-2 rounded-2xl transition">Login</a></li>
      </ul>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen gradient-bg">
        {/* Floating background elements */}
        <div className="bg-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        <Navbar />
        <main className="container mx-auto px-4 py-24 max-w-5xl fade-in-up">
          {children}
        </main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}