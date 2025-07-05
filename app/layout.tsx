import React from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl mx-auto px-6">
      <div className="glass-navbar rounded-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <svg width="40" height="40" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
              <defs>
                <linearGradient id="spotifyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1DB954"/>
                  <stop offset="50%" stopColor="#1ed760"/>
                  <stop offset="100%" stopColor="#17a74a"/>
                </linearGradient>
              </defs>
              <circle cx="84" cy="84" r="84" fill="url(#spotifyGradient)"/>
              <path d="M120.1 116.2c-1.7 2.8-5.3 3.7-8.1 2-22.2-13.6-50.2-16.7-83.2-9.2-3.2.7-6.4-1.3-7.1-4.5-.7-3.2 1.3-6.4 4.5-7.1 35.5-7.9 66.2-4.4 90.5 10.4 2.8 1.7 3.7 5.3 2 8.1zm11.6-23.2c-2.1 3.4-6.5 4.5-9.9 2.4-25.4-15.6-64.2-20.1-94.2-11.1-3.8 1.1-7.8-1.1-8.9-4.9-1.1-3.8 1.1-7.8 4.9-8.9 33.8-9.8 75.1-5 103.6 12.2 3.4 2.1 4.5 6.5 2.4 9.9zm13.2-26.2c-30.1-18.1-79.7-19.8-108.2-11.1-4.4 1.3-9-1.2-10.3-5.6-1.3-4.4 1.2-9 5.6-10.3 31.8-9.5 85.1-7.6 119.7 12.2 4 2.4 5.3 7.6 2.9 11.6-2.4 4-7.6 5.3-11.6 2.9z" fill="#fff"/>
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gradient">Spotify Migrator</h1>
            <p className="text-xs text-white/60">Music Migration Tool</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          <NavLink href="/" label="Home" />
          <NavLink href="/migrate" label="Migrate" />
          <NavLink href="#about" label="About" />
          <NavLink href="/login" label="Login" isButton />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden glass-button p-2 rounded-xl">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

function NavLink({ href, label, isButton = false }: { href: string; label: string; isButton?: boolean }) {
  if (isButton) {
    return (
      <a 
        href={href} 
        className="btn-primary text-sm px-6 py-2 rounded-full font-medium transition-all hover:scale-105"
      >
        {label}
      </a>
    );
  }
  
  return (
    <a 
      href={href} 
      className="text-white/80 hover:text-white px-4 py-2 rounded-xl transition-all hover:bg-white/10 font-medium text-sm"
    >
      {label}
    </a>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Spotify Migrator - Transfer Your Music Library</title>
        <meta name="description" content="Seamlessly transfer your Spotify playlists, liked songs, and albums between accounts" />
      </head>
      <body className="min-h-screen gradient-bg">
        {/* Enhanced Floating Background Elements */}
        <div className="bg-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
        
        <Navbar />
        
        <main className="container mx-auto px-4 py-32 max-w-7xl fade-in-up">
          {children}
        </main>
        
        {/* Enhanced Footer */}
        <footer className="w-full mt-20 py-8 border-t border-white/10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="glass-card p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-white/80">Made with</span>
                <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-pulse"></div>
                <span className="text-white/80">by developers, for music lovers</span>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm text-white/60">
                <span>© 2025 Spotify Migrator</span>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>
        </footer>
        
        <Toaster 
          position="top-center" 
          richColors 
          toastOptions={{
            style: {
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
            },
          }}
        />
      </body>
    </html>
  );
}