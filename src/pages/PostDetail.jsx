import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { postsData } from '../data/postsData';
import BlogPostCard from '../components/BlogPostCard';
import { ArrowLeft, Calendar, Clock, Share2, Link as LinkIcon } from 'lucide-react';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = postsData.find(p => p.id === id);

  // Scroll to top on mount / post change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="glass-panel" style={{ padding: '6rem 2rem', textAlign: 'center', borderRadius: '24px', margin: '4rem auto', maxWidth: '600px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Article Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>The article you are looking for does not exist or may have been moved.</p>
        <Link to="/" className="btn-premium">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  // Get related posts (excluding current post, matching category if possible)
  const relatedPosts = postsData
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  return (
    <article className="animate-fade-in" style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      {/* Back button */}
      <div>
        <button 
          onClick={() => navigate('/')} 
          className="btn-outline" 
          style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Articles</span>
        </button>
      </div>

      {/* Header section */}
      <header style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center', alignItems: 'center' }}>
        
        <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-primary)', letterSpacing: '1px', backgroundColor: 'rgba(99, 102, 241, 0.1)', padding: '0.35rem 1rem', borderRadius: '9999px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
          {post.category}
        </span>
        
        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: '2.75rem', fontWeight: '800', lineHeight: '1.2', color: 'var(--text-primary)', maxWidth: '800px', letterSpacing: '-1px' }}>
          {post.title}
        </h1>

        {/* Post Metadata details */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--border-color)' }}
            />
            <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{post.author.name}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Calendar size={15} />
            <span>{post.date}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={15} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Hero Cover Banner */}
      <div className="glass-panel" style={{ overflow: 'hidden', borderRadius: '24px', height: '420px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
        <img 
          src={post.coverImage} 
          alt={post.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Main content grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px', gap: '2rem' }} className="article-layout">
        
        {/* Article Body */}
        <div className="prose-content" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Floating Social Shares (Sticky Sidebar) */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', position: 'sticky', top: '120px', height: 'fit-content' }} className="share-sidebar">
          <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Share</div>
          
          <a href="#" className="share-btn glass-panel" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="#" className="share-btn glass-panel" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" className="share-btn glass-panel" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="share-btn glass-panel" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            <LinkIcon size={16} />
          </a>
        </aside>
      </div>

      {/* Author box */}
      <section className="glass-panel" style={{ display: 'flex', gap: '1.5rem', padding: '2rem', borderRadius: '20px', alignItems: 'center', border: '1px solid var(--border-color)', marginTop: '2rem' }}>
        <img 
          src={post.author.avatar} 
          alt={post.author.name} 
          style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-primary)' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Written by {post.author.name}</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{post.author.role}</p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            Joseph is a software engineer passionate about creating beautiful and functional user experiences. He writes regularly about web development, UI design guidelines, and tech tooling.
          </p>
        </div>
      </section>

      {/* Related Posts Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '3rem', marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Related Articles</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {relatedPosts.map(p => (
            <BlogPostCard key={p.id} post={p} />
          ))}
        </div>
      </section>

      {/* Stylings for full post rendering */}
      <style>{`
        .prose-content p {
          margin-bottom: 1.5rem;
        }
        .prose-content .lead {
          font-size: 1.3rem;
          line-height: 1.7;
          color: var(--text-primary);
          margin-bottom: 2rem;
          font-weight: 500;
        }
        .prose-content h3 {
          font-family: var(--font-sans);
          font-size: 1.6rem;
          font-weight: 800;
          margin: 2rem 0 1rem;
          color: var(--text-primary);
          letter-spacing: -0.5px;
        }
        .prose-content code {
          font-family: monospace;
          background: rgba(255, 255, 255, 0.05);
          color: var(--accent-cyan);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          font-size: 0.9em;
        }
        .prose-content pre {
          background: rgba(10, 11, 16, 0.65);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.25rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .prose-content pre code {
          background: none;
          color: #e5e7eb;
          padding: 0;
          font-size: 0.85em;
        }
        .prose-content blockquote {
          border-left: 4px solid var(--accent-primary);
          padding-left: 1.5rem;
          font-style: italic;
          color: var(--text-secondary);
          margin: 2rem 0;
          font-size: 1.25rem;
        }
        .prose-content ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        .prose-content li {
          margin-bottom: 0.5rem;
        }
        .share-btn:hover {
          color: var(--accent-primary) !important;
          border-color: var(--accent-primary) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .article-layout {
            grid-template-columns: 1fr !important;
          }
          .share-sidebar {
            flex-direction: row !important;
            justify-content: center !important;
            position: static !important;
            padding: 1rem 0 !important;
            border-top: 1px solid var(--border-color) !important;
            border-bottom: 1px solid var(--border-color) !important;
            margin: 1rem 0 !important;
          }
        }
        @media (max-width: 600px) {
          header h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </article>
  );
}
