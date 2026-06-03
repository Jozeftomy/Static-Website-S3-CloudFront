import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Code, Palette, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="about-container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', maxWidth: '960px', margin: '0 auto' }}>
      
      {/* Title */}
      <header style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800' }}>About Joseph Tomy</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>The mind and creator behind AuraBlog</p>
      </header>

      {/* Hero card */}
      <section className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', overflow: 'hidden', borderRadius: '24px' }} className="about-hero-grid">
        <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.25rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-primary)', letterSpacing: '1px' }}>
            Author Bio
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>Designing the future, one line of code at a time.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Hi, I'm Joseph! I'm a Front-end Engineer and UI/UX Designer based on the West Coast. I specialize in building highly interactive, scalable web applications with rich visuals and seamless animations.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            I created AuraBlog as a digital workshop to document my experiments with React, share web design layout principles, and help developers streamline their productivity.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <Link to="/contact" className="btn-premium">
              <span>Get in Touch</span>
              <Mail size={16} />
            </Link>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: '320px' }}>
          <img 
            src="/images/about_author.png" 
            alt="Joseph Miller Avatar" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'center' }} className="about-stats">
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>10+</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>Completed Projects</div>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-secondary)', marginBottom: '0.25rem' }}>15k+</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>Monthly Readers</div>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>3+ Years</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>Writing Experience</div>
        </div>
      </section>

      {/* Focus areas */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', textAlign: 'center' }}>My Core Focus Areas</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="focus-grid">
          
          <div className="glass-panel" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderRadius: '16px' }}>
            <div style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>
              <Code size={28} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700' }}>Web Development</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Building scalable, modular applications with React, TypeScript, and modern bundlers like Vite.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderRadius: '16px' }}>
            <div style={{ color: 'var(--accent-secondary)', marginBottom: '0.25rem' }}>
              <Palette size={28} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700' }}>UI & UX Design</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Crafting immersive digital layouts using CSS, custom properties, typography guidelines, and glassmorphism.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderRadius: '16px' }}>
            <div style={{ color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>
              <Zap size={28} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700' }}>Developer Tooling</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Optimizing command line shortkeys, editor configurations, and bundler profiles to streamline build velocity.
            </p>
          </div>

        </div>
      </section>

      <style>{`
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          border-radius: 24px;
        }
        @media (max-width: 768px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .about-hero-grid div:nth-child(2) {
            order: -1;
            height: 250px !important;
            min-height: auto !important;
          }
          .about-stats {
            grid-template-columns: 1fr !important;
          }
          .focus-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
