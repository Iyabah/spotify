'use client';
import React, { useState } from 'react';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  function Hero() {
    return (
      <section className="text-center mb-32 fade-in-up">
        <div className="relative">
          {/* Hero Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl -z-10"></div>
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/80">Now supporting all Spotify features</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-gradient mb-8 leading-tight">
              Spotify
              <br />
              <span className="text-gradient-secondary">Migrator</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Seamlessly transfer your entire music library between Spotify accounts. 
              <span className="text-gradient-secondary font-semibold"> Playlists, liked songs, albums</span> - 
              everything moves with you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/migrate" 
                className="btn-primary text-lg px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/25 transition-all group"
              >
                <span className="flex items-center gap-3">
                  Start Migration
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <button
                onClick={() => setShowLogin(!showLogin)}
                className="btn-secondary text-lg px-8 py-4 rounded-2xl font-semibold group"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Demo Login
                </span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-white/70">Success Rate</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
                <div className="text-white/70">Songs Migrated</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">500+</div>
                <div className="text-white/70">Happy Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function FeatureCard({ icon, title, description, delay = 0 }: { 
    icon: string; 
    title: string; 
    description: string; 
    delay?: number;
  }) {
    return (
      <div 
        className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
          {description}
        </p>
      </div>
    );
  }

  function LoginModal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      
      setTimeout(() => {
        setLoading(false);
        if (!email || !password) {
          setError('Please enter your email and password.');
        } else {
          alert('Login successful! (This is a demo)');
          setShowLogin(false);
        }
      }, 1200);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === e.currentTarget) {
        setShowLogin(false);
      }
    };

    return (
      <div 
        className="fixed inset-0 flex items-center justify-center z-50 transition-all duration-300"
        style={{ 
          background: 'rgba(0, 0, 0, 0.5)', 
          backdropFilter: 'blur(20px)' 
        }}
        onClick={handleOverlayClick}
      >
        <div className="glass-card w-full max-w-md mx-4 p-8 scale-in">
          <button 
            className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl p-2 rounded-full hover:bg-white/10 transition-all hover:rotate-90"
            onClick={() => setShowLogin(false)}
          >
            ×
          </button>
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gradient mb-2">Welcome Back</h2>
            <p className="text-white/70">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="form-label" htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="form-label" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
            
            {error && (
              <div className="text-red-400 text-center text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                {error}
              </div>
            )}
          </form>
          
          <div className="text-center mt-6">
            <a 
              href="#" 
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Powerful features designed to make your music migration seamless and secure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon="🎵" 
            title="Migrate Playlists" 
            description="Transfer all your carefully curated playlists with their exact order and metadata preserved."
            delay={0}
          />
          <FeatureCard 
            icon="❤️" 
            title="Liked Songs" 
            description="Move your entire liked songs collection without losing any of your favorite tracks."
            delay={100}
          />
          <FeatureCard 
            icon="💿" 
            title="Saved Albums" 
            description="Keep your saved albums collection intact when switching between accounts."
            delay={200}
          />
          <FeatureCard 
            icon="🔒" 
            title="Secure & Private" 
            description="OAuth2 authentication ensures your data stays safe. We never store your credentials."
            delay={300}
          />
          <FeatureCard 
            icon="⚡" 
            title="Lightning Fast" 
            description="Optimized migration process transfers thousands of songs in minutes, not hours."
            delay={400}
          />
          <FeatureCard 
            icon="🎯" 
            title="100% Accurate" 
            description="Advanced matching algorithms ensure every song, playlist, and album transfers correctly."
            delay={500}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            How It Works
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Simple 3-step process to migrate your entire music library
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="text-4xl mb-6">🔗</div>
            <h3 className="text-xl font-bold text-white mb-4">Connect Accounts</h3>
            <p className="text-white/70">Securely connect both your source and destination Spotify accounts</p>
          </div>
          
          <div className="glass-card p-8 text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="text-4xl mb-6">✅</div>
            <h3 className="text-xl font-bold text-white mb-4">Select Content</h3>
            <p className="text-white/70">Choose which playlists, liked songs, and albums you want to migrate</p>
          </div>
          
          <div className="glass-card p-8 text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="text-4xl mb-6">🚀</div>
            <h3 className="text-xl font-bold text-white mb-4">Start Migration</h3>
            <p className="text-white/70">Sit back and watch as your music library transfers automatically</p>
          </div>
        </div>
      </section>

      {showLogin && <LoginModal />}
    </>
  );
}