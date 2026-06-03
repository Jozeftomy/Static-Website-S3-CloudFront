import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 6 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    }, 1500);
  };

  return (
    <div className="contact-container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', maxWidth: '960px', margin: '0 auto' }}>
      
      {/* Title */}
      <header style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Get in Touch</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Have questions or want to collaborate? Drop me a message.</p>
      </header>

      {/* Grid container */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '2rem' }} className="contact-grid">
        
        {/* Info panel */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>Contact Information</h2>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Email Me</div>
                <a href="mailto:josephtomy02@gmail.com" style={{ fontSize: '0.95rem', fontWeight: '500' }}>josephtomy02@gmail.com</a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Location</div>
                <div style={{ fontSize: '0.95rem', fontWeight: '500' }}>Kochi, Kerala</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MessageSquare size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Social Accounts</div>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-tag glass-panel" style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '2px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Github
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-tag glass-panel" style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '2px' }}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> Twitter
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Form */}
        <section className="glass-panel" style={{ padding: '2.5rem', borderRadius: '20px', position: 'relative' }}>
          
          {submitSuccess ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '300px', textAlign: 'center', gap: '1rem', animation: 'fadeIn 0.4s forwards' }}>
              <div style={{ color: '#10b981', transform: 'scale(1.5)', marginBottom: '0.5rem' }}>
                <CheckCircle size={40} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Message Sent!</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '320px', fontSize: '0.95rem' }}>
                Thank you for reaching out, Joseph. I have received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="form-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="contact-input glass-panel"
                    style={{ padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.9rem', width: '100%', background: 'rgba(255,255,255,0.01)' }}
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="contact-input glass-panel"
                    style={{ padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.9rem', width: '100%', background: 'rgba(255,255,255,0.01)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="subject" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="contact-input glass-panel"
                  style={{ padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.9rem', width: '100%', background: 'rgba(255,255,255,0.01)' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="contact-input glass-panel"
                  style={{ padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.9rem', width: '100%', resize: 'none', background: 'rgba(255,255,255,0.01)' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn-premium" 
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', opacity: isSubmitting ? '0.7' : '1', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                <Send size={16} />
              </button>

            </form>
          )}
        </section>
      </div>

      <style>{`
        .contact-input:focus {
          border-color: var(--accent-primary) !important;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.15);
        }
        .social-tag:hover {
          color: var(--accent-primary) !important;
          border-color: var(--accent-primary) !important;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
