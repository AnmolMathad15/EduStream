import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
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
  const { showToast } = useToast();
  const [, setLocation] = useLocation();

  const validate = () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }
    if (password.length < 6) {
      setPassError(true);
      valid = false;
    } else {
      setPassError(false);
    }
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast(mode === 'signin' ? 'Successfully signed in!' : 'Account created successfully!');
    }, 1100);
  };

  const toggleMode = () => {
    const newMode = mode === 'signin' ? 'signup' : 'signin';
    setMode(newMode);
    setLocation(newMode === 'signin' ? '/' : '/signup');
  };

  return (
    <div className="auth-card">
      <div className="card-header">
        <h2>{mode === 'signin' ? 'Welcome back! 👋' : 'Create your account ✨'}</h2>
        <p className="sub">
          {mode === 'signin' 
            ? 'Sign in to continue your learning, practice, and placement journey.' 
            : 'Join EduStream to start learning, practicing, and getting hired.'}
        </p>
      </div>

      <div className="social-row">
        <button className="oauth-btn" onClick={() => showToast('Continue with Google')}>
          <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Google
        </button>
        <button className="oauth-btn" onClick={() => showToast('Continue with Microsoft')}>
          <svg viewBox="0 0 21 21"><path fill="#f35325" d="M1 1h9v9H1z"/><path fill="#81bc06" d="M11 1h9v9h-9z"/><path fill="#05a6f0" d="M1 11h9v9H1z"/><path fill="#ffba08" d="M11 11h9v9h-9z"/></svg>
          Microsoft
        </button>
      </div>

      <div className="divider">or continue with email</div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <div className="input-wrap">
            <input 
              type="email" 
              className={`input-field ${emailError ? 'invalid' : ''}`}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <span className={`error-msg ${emailError ? 'show' : ''}`}>Please enter a valid email address.</span>
        </div>

        <div className="form-group">
          <div className="label-row">
            <label>Password</label>
            {mode === 'signin' && (
              <button type="button" className="forgot" onClick={() => showToast('Password reset link sent')}>
                Forgot password?
              </button>
            )}
          </div>
          <div className="input-wrap">
            <input 
              type={showPass ? 'text' : 'password'} 
              className={`input-field ${passError ? 'invalid' : ''}`}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)}>
              {showPass ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
              )}
            </button>
          </div>
          <span className={`error-msg ${passError ? 'show' : ''}`}>Password must be at least 6 characters.</span>
        </div>

        {mode === 'signin' && (
          <div className="remember-row">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember for 30 days</label>
          </div>
        )}

        <button type="submit" className="form-btn" disabled={loading}>
          {loading 
            ? (mode === 'signin' ? 'Signing in...' : 'Creating account...') 
            : (mode === 'signin' ? 'Sign In' : 'Create Account')}
        </button>
      </form>

      <div className="switch-row">
        {mode === 'signin' ? (
          <>Don't have an account? <button onClick={toggleMode}>Sign up</button></>
        ) : (
          <>Already have an account? <button onClick={toggleMode}>Sign in</button></>
        )}
      </div>

      <div className="explore-box">
        <div>
          <h4>Not ready to sign up?</h4>
          <p>Explore free courses and see what EduStream has to offer.</p>
          <a href="#" onClick={(e) => { e.preventDefault(); showToast('Exploring courses'); }}>Explore Courses →</a>
        </div>
        <div className="explore-icon">🧭</div>
      </div>
    </div>
  );
}