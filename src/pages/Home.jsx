import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postsData, categories } from '../data/postsData';
import BlogPostCard from '../components/BlogPostCard';
import { Search, Mail, Send, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Find the featured post
  const featuredPost = postsData.find(post => post.featured) || postsData[0];
  // Other posts
  const otherPosts = postsData;

  // Filter logic
  const filteredPosts = otherPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = 
      selectedCategory === 'All' || 
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  return (
    <div className="home-container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      
      {/* Hero section */}
      <section className="glass-panel hero-section animate-fade-in" style={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        padding: '3.5rem 2rem',
        backgroundImage: 'linear-gradient(rgba(10, 11, 16, 0.75), rgba(10, 11, 16, 0.9)), url(/images/hero_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(99, 102, 241, 0.15)', padding: '0.4rem 1rem', borderRadius: '9999px', border: '1px solid rgba(99, 102, 241, 0.3)', color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: '600' }}>
          <Sparkles size={14} />
          Welcome to AuraBlog
        </div>
        
        <h1 style={{ fontSize: '3rem', fontWeight: '800', maxWidth: '800px', lineHeight: '1.15', background: 'linear-gradient(135deg, #ffffff 30%, var(--accent-primary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-1.5px' }}>
          Exploring the Frontiers of Tech, Design, & Mindset
        </h1>
        
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.1rem' }}>
          A curated space for front-end developers, UI designers, and creators who strive to design the future, one pixel at a time.
        </p>

        {/* Hero Newsletter Form */}
        <form onSubmit={handleSubscribe} style={{ position: 'relative', width: '100%', maxWidth: '480px', marginTop: '1rem' }} className="newsletter-form">
          <div className="glass-panel" style={{ display: 'flex', padding: '0.35rem', borderRadius: '9999px', background: 'rgba(10, 11, 16, 0.7)', border: '1px solid var(--border-color)', alignItems: 'center' }}>
            <div style={{ paddingLeft: '1rem', color: 'var(--text-muted)' }}>
              <Mail size={18} />
            </div>
            <input 
              type="email" 
              placeholder="Enter your email for newsletters..." 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ flex: '1', padding: '0.5rem 1rem', border: 'none', background: 'none', color: '#fff', fontSize: '0.95rem' }}
            />
            <button type="submit" className="btn-premium" style={{ padding: '0.65rem 1.25rem' }}>
              <span>Subscribe</span>
              <Send size={14} />
            </button>
          </div>
          
          {/* Subscription success alert */}
          {isSubscribed && (
            <div style={{
              position: 'absolute',
              top: '110%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              color: '#34d399',
              padding: '0.5rem 1.5rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              whiteSpace: 'nowrap',
              animation: 'fadeIn 0.2s forwards',
              zIndex: '10'
            }}>
              <CheckCircle size={14} />
              <span>Subscription successful! Thank you.</span>
            </div>
          )}
        </form>
      </section>

      {/* Featured post showcase */}
      {featuredPost && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Featured Post
            <span style={{ height: '3px', flex: '1', background: 'linear-gradient(90deg, var(--accent-primary) 0%, transparent 100%)', borderRadius: '2px', marginLeft: '0.5rem' }}></span>
          </h2>
          <div className="glass-panel featured-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', overflow: 'hidden', borderRadius: '20px' }}>
            <div style={{ position: 'relative', overflow: 'hidden', minHeight: '300px' }} className="featured-img-container">
              <img 
                src={featuredPost.coverImage} 
                alt={featuredPost.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)' }}
                className="featured-cover"
              />
            </div>
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }} className="featured-body">
              <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-primary)', letterSpacing: '1px' }}>
                {featuredPost.category}
              </span>
              
              <Link to={`/post/${featuredPost.id}`}>
                <h3 className="featured-title" style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.2', transition: 'color var(--transition-fast)' }}>
                  {featuredPost.title}
                </h3>
              </Link>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.5' }}>
                {featuredPost.excerpt}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                <img 
                  src={featuredPost.author.avatar} 
                  alt={featuredPost.author.name} 
                  style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--border-color)' }}
                />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{featuredPost.author.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{featuredPost.date} · {featuredPost.readTime}</div>
                </div>
              </div>

              <div style={{ marginTop: '1.25rem' }}>
                <Link to={`/post/${featuredPost.id}`} className="btn-premium">
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main blog post listing */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Filters and search container */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }} className="categories-scroller">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--accent-primary)' : 'var(--border-color)',
                  backgroundColor: selectedCategory === cat ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                  color: selectedCategory === cat ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
                className="category-tab"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="glass-panel" style={{ display: 'flex', padding: '0.5rem 1rem', borderRadius: '9999px', width: '100%', maxWidth: '320px', alignItems: 'center', backgroundColor: 'var(--bg-secondary)' }}>
            <Search size={18} style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }} />
            <input 
              type="text" 
              placeholder="Search posts..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', background: 'none', border: 'none', color: '#fff', fontSize: '0.9rem' }}
            />
          </div>
        </div>

        {/* Post Grid */}
        {filteredPosts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {filteredPosts.map(post => (
              <div key={post.id}>
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: '16px' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>No articles match your search criteria. Try a different query or category.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} 
              className="btn-outline" 
              style={{ marginTop: '1.5rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      <style>{`
        .featured-title:hover {
          color: var(--accent-primary) !important;
        }
        .featured-grid:hover .featured-cover {
          transform: scale(1.03);
        }
        .category-tab:hover {
          border-color: var(--accent-primary);
          color: var(--text-primary);
        }
        .categories-scroller::-webkit-scrollbar {
          height: 4px;
        }
        @media (max-width: 900px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-body {
            padding: 1.5rem !important;
          }
          .featured-img-container {
            height: 250px !important;
            min-height: auto !important;
          }
        }
        @media (max-width: 600px) {
          .hero-section h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
