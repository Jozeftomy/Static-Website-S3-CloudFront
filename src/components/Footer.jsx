import React from 'react';
import { Link } from 'react-router-dom';
import { Feather, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', padding: '3rem 0 2rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ padding: '0.35rem', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <Feather size={14} />
          </div>
          <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>AURA<span style={{ color: 'var(--accent-primary)' }}>BLOG</span></span>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }} className="footer-link">Home</Link>
          <Link to="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }} className="footer-link">About</Link>
          <Link to="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }} className="footer-link">Contact</Link>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.03)', paddingTop: '1.5rem' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} AuraBlog. All rights reserved. Built with React & Vite.
        </p>
        
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          Made with <Heart size={12} style={{ color: 'rgba(239, 68, 68, 0.85)' }} /> by Joseph Miller
        </p>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--accent-primary) !important;
        }
      `}</style>
    </footer>
  );
}
