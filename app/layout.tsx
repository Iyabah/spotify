import React from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

function Navbar() {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="pill-navbar px-8 py-4 flex items-center justify-center gap-8">
        <NavLink href="/" label="Home" />
        <NavLink href="#features" label="Features" />
        <NavLink href="#about" label="About" />
        <NavLink href="/login" label="Login" />
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      className="nav-link text-white/90 hover:text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/15 font-medium text-lg"
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