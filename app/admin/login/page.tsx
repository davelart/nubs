'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
    await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/admin',
    });
  } catch (error) {
    setError('Invalid email or password');
  } finally {
    setLoading(false);
  }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-brand">
            <div className="brand-name">NUBS<span>-GHANA</span></div>
            <span className="brand-tag">Admin Portal</span>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {error && (
              <div style={{ color: '#e11d48', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
                {error}
              </div>
            )}
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="admin@nubsghana.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-admin btn-admin-primary"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', width: '100%' }}
              disabled={loading}
            >
              {loading ? 'Signing In...' : (
                <>
                  Sign In <i className="ph ph-sign-in"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
