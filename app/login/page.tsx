'use client';
import React, { useState } from 'react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      if (!email || !password) {
        setError('Please enter your email and password.');
      } else {
        // Simulate login success
        alert('Login successful! (This is a demo)');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="login-modal active fixed inset-0 flex items-center justify-center z-50">
        <div className="login-form relative w-full max-w-md mx-auto">
          <button className="close-button absolute top-4 right-4" onClick={() => window.location.href = '/'}>&times;</button>
          <div className="login-header mb-8">
            <h2 className="text-3xl font-bold text-gradient mb-2">Welcome Back</h2>
            <p className="text-white/70">Sign in to your account</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="form-group">
              <label htmlFor="email">Email</label>
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
            <div className="form-group">
              <label htmlFor="password">Password</label>
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
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
            {error && <div className="text-red-400 text-center text-sm">{error}</div>}
          </form>
          <div className="forgot-password mt-4">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
