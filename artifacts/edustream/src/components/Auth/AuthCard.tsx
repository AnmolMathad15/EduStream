import React, { useState, useRef } from 'react';
import { useLocation } from 'wouter';
import { useToast } from '../../contexts/ToastContext';
import './Auth.css';

export function AuthCard({ initialMode = 'signin' }: { initialMode?: 'signin' | 'signup' }) {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [, setLocation] = useLocation();
  const { showToast } = useToast();
  const rememberRef = useRef<HTMLInputElement>(null);

  function validEmail(v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let ok = true;
    if (!validEmail(email)) { setEmailError(true); ok = false; } else { setEmailError(false); }
    if (password.length < 6) { setPassError(true); ok = false; } else { setPassError(false); }
    if (!ok) return;

    setLoading(true);
    const label = mode === 'signin' ? 'Sign In' : 'Create Account';
    setTimeout(() => {
      setLoading(false);
      showToast(mode === 'signin' ? 'Signed in successfully!' : 'Account created!');
      setEmail('');
      setPassword('');
      if (rememberRef.current) rememberRef.current.checked = true;
    }, 1100);
  };

  const toggleMode = () => {
    const next = mode === 'signin' ? 'signup' : 'signin';
    setMode(next);
    setLocation(next === 'signin' ? '/' : '/signup');
  };

  return (
    <div className="auth-card">
      <h2 id="cardTitle">{mode === 'signin' ? 'Welcome back! 👋' : 'Create your account ✨'}</h2>
      <p className="sub" id="cardSub">
        {mode === 'signin'
          ? 'Sign in to continue your learning, practice, and placement journey.'
          : 'Join EduStream to start learning, practicing, and getting hired.'}
      </p>

      <button className="oauth-btn" id="googleBtn" onClick={() => showToast('Redirecting to Google sign-in…')}>
        <svg viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0 0 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.43.34-2.09V7.06H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.85z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>

      <button className="oauth-btn" id="microsoftBtn" onClick={() => showToast('Redirecting to Microsoft sign-in…')}>
        <svg viewBox="0 0 23 23">
          <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
          <rect x="12" y="1" width="10" height="10" fill="#7FBA00"/>
          <rect x="1" y="12" width="10" height="10" fill="#00A4EF"/>
          <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
        </svg>
        Continue with Microsoft
      </button>

      <div className="divider">or continue with email</div>

      <form id="authForm" onSubmit={handleSubmit} noValidate>
        <label className="field-label" htmlFor="email">Email address</label>
        <div className="input-wrap">
          <span className="lead-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M2 7l10 6 10-6"/>
            </svg>
          </span>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="email"
            className={emailError ? 'invalid' : ''}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className={`error-text${emailError ? ' show' : ''}`} id="emailError">Please enter a valid email address.</div>

        <div className="field-row">
          <label className="field-label" htmlFor="password" style={{ marginBottom: 0 }}>Password</label>
          <button
            type="button"
            className="forgot"
            id="forgotBtn"
            onClick={() => {
              const em = prompt('Enter your email to receive a password reset link:');
              if (em) showToast(validEmail(em) ? 'Reset link sent to ' + em : 'Please enter a valid email');
            }}
          >
            Forgot Password?
          </button>
        </div>
        <div className="input-wrap">
          <span className="lead-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="10" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </span>
          <input
            type={showPass ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className={passError ? 'invalid' : ''}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="eye-toggle"
            id="eyeToggle"
            aria-label={showPass ? 'Hide password' : 'Show password'}
            onClick={() => setShowPass(v => !v)}
          >
            <svg id="eyeIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {showPass ? (
                <>
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.6 21.6 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 7 11 7a21.6 21.6 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </>
              ) : (
                <>
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
                  <circle cx="12" cy="12" r="3"/>
                </>
              )}
            </svg>
          </button>
        </div>
        <div className={`error-text${passError ? ' show' : ''}`} id="passwordError">Password must be at least 6 characters.</div>

        <div className="remember-row">
          <input type="checkbox" id="remember" ref={rememberRef} defaultChecked />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button type="submit" className="signin-btn" id="signInBtn" disabled={loading}>
          <span id="signInLabel">
            {loading
              ? (mode === 'signin' ? 'Signing in…' : 'Creating account…')
              : (mode === 'signin' ? 'Sign In' : 'Create Account')}
          </span>
          {!loading && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          )}
        </button>
      </form>

      <div className="switch-row">
        <span id="switchText">{mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}</span>{' '}
        <button id="switchBtn" onClick={toggleMode}>
          {mode === 'signin' ? 'Create Account' : 'Sign In'}
        </button>
      </div>

      <div className="explore-box">
        <div>
          <h4>Explore EduStream</h4>
          <p>Browse courses and discover learning opportunities.</p>
          <a href="#" id="exploreLink" onClick={e => { e.preventDefault(); showToast('Opening course catalog…'); }}>Browse courses →</a>
        </div>
        <div className="explore-icon">📚🪴</div>
      </div>
    </div>
  );
}
