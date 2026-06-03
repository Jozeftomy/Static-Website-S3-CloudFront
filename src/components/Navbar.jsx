import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Feather, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightTheme(true);
      document.body.classList.add('light-theme');
    } else {
      setIsLightTheme(false);
      document.body.classList.remove('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isLightTheme;
    setIsLightTheme(nextTheme);
    if (nextTheme) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="navbar-wrapper animate-fade-in" style={{ position: 'sticky', top: '0', zIndex: '100', padding: '1rem 0' }}>
      <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 2rem', borderRadius: '9999px', background: 'var(--bg-secondary)' }}>
        
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.4rem', color: 'var(--text-primary)', letterSpacing: '-0.5px' }} onClick={() => setIsMobileMenuOpen(false)}>
          <div style={{ padding: '0.4rem', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <Feather size={18} />
          </div>
          <span>AURA<span style={{ color: 'var(--accent-primary)' }}>BLOG</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" className="nav-link" style={{ fontWeight: '500', color: isActiveLink('/') ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>Home</Link>
          <Link to="/about" className="nav-link" style={{ fontWeight: '500', color: isActiveLink('/about') ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>About</Link>
          <Link to="/contact" className="nav-link" style={{ fontWeight: '500', color: isActiveLink('/contact') ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>Contact</Link>
        </nav>

        {/* Navigation Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleTheme} 
            style={{ cursor: 'pointer', padding: '0.5rem', borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.03)', transition: 'all 0.2s', width: '38px', height: '38px' }}
            title="Toggle theme"
          >
            {isLightTheme ? <Moon size={18} style={{ color: 'var(--text-primary)' }} /> : <Sun size={18} style={{ color: 'var(--text-primary)' }} />}
          </button>
          
          <div className="social-links-container" style={{ display: 'flex', gap: '0.5rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '1rem' }}>
            <a href="https://github.com/Jozeftomy" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem', color: 'var(--text-secondary)' }} className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem', color: 'var(--text-secondary)' }} className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            style={{ cursor: 'pointer', display: 'none', padding: '0.5rem', color: 'var(--text-primary)' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="glass-panel mobile-nav-drawer" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1.5rem', marginTop: '0.75rem', borderRadius: '16px', animation: 'slideUp 0.3s forwards' }}>
          <Link to="/" className="nav-link" style={{ fontWeight: '500', color: isActiveLink('/') ? 'var(--accent-primary)' : 'var(--text-secondary)' }} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" style={{ fontWeight: '500', color: isActiveLink('/about') ? 'var(--accent-primary)' : 'var(--text-secondary)' }} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" className="nav-link" style={{ fontWeight: '500', color: isActiveLink('/contact') ? 'var(--accent-primary)' : 'var(--text-secondary)' }} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Embedded CSS for Navbar Responsive Handling */}
      <style>{`
        .nav-link:hover {
          color: var(--accent-primary) !important;
        }
        .social-icon:hover {
          color: var(--accent-primary) !important;
          transform: translateY(-1px);
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .social-links-container {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
