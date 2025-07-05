'use client';
import React, { useState } from 'react';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  function Hero() {
    return (
      <section className="hero text-center mb-20 fade-in-up">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gradient mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
          Spotify Migrator
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Seamlessly transfer your music library between Spotify accounts
        </p>
        <a href="/migrate" className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
          Get Started
        </a>
      </section>
    );
  }

  function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }) {
    return (
      <div className="glass-card flex flex-col items-center text-center p-8 fade-in-up">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    );
  }

  function LoginCard() {
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
        className="fixed inset-0 flex items-center justify-center z-50 opacity-100 visible transition-all duration-300"
        style={{ 
          background: 'rgba(0, 0, 0, 0.3)', 
          backdropFilter: 'blur(10px)' 
        }}
        onClick={handleOverlayClick}
      >
        <div 
          className="relative w-full max-w-md mx-4 p-10 transition-all duration-300 transform scale-100"
          style={{ 
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '25px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
          }}
        >
          <button 
            className="absolute top-5 right-5 text-white text-2xl p-1 rounded-full transition-all duration-300 hover:bg-white/20 hover:rotate-90"
            onClick={() => setShowLogin(false)}
          >
            &times;
          </button>
          
          <div className="text-center mb-8">
            <h2 className="text-white text-3xl font-semibold mb-2">Welcome Back</h2>
            <p className="text-white/70">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white mb-2 font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-5 py-4 text-white text-base transition-all duration-300 focus:outline-none rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-white mb-2 font-medium" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-5 py-4 text-white text-base transition-all duration-300 focus:outline-none rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 text-white text-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-0.5 disabled:opacity-50 rounded-2xl"
              style={{
                background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
            
            {error && (
              <div className="text-red-400 text-center text-sm mt-3">
                {error}
              </div>
            )}
          </form>
          
          <div className="text-center mt-5">
            <a 
              href="#" 
              className="text-white/80 text-sm transition-colors duration-300 hover:text-white"
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
      <div className="flex justify-center mb-12">
        <button
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? 'Close Login' : 'Demo Login'}
        </button>
      </div>
      {showLogin && <LoginCard />}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <FeatureCard 
          icon="🎵" 
          title="Migrate Playlists" 
          description="Transfer all your carefully curated playlists from one Spotify account to another with just a few clicks." 
        />
        <FeatureCard 
          icon="❤️" 
          title="Liked Songs" 
          description="Move your entire liked songs collection to your new account without losing any of your favorite tracks." 
        />
        <FeatureCard 
          icon="💿" 
          title="Saved Albums" 
          description="Keep your saved albums collection intact when switching between Spotify accounts." 
        />
        <FeatureCard 
          icon="🔒" 
          title="Secure" 
          description="Built with security best practices using OAuth2 authentication to keep your data safe and protected." 
        />
        <FeatureCard 
          icon="🚀" 
          title="Fast Migration" 
          description="Optimized migration process ensures your music library transfers quickly and efficiently." 
        />
        <FeatureCard 
          icon="✨" 
          title="Easy to Use" 
          description="Simple, intuitive interface makes migrating your music library a breeze for users of all technical levels." 
        />
      </section>
    </>
  );
}