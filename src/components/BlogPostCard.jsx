import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPostCard({ post }) {
  return (
    <article className="glass-panel blog-card animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      
      {/* Cover Image Container */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
        <img 
          src={post.coverImage} 
          alt={post.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)' }}
          className="card-image"
        />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(10, 11, 16, 0.85)', backdropFilter: 'blur(4px)', border: '1px solid var(--border-color)', fontSize: '0.75rem', fontWeight: '600', color: 'var(--accent-primary)' }}>
          {post.category}
        </div>
      </div>

      {/* Card Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: '1', gap: '1rem' }}>
        
        {/* Meta Stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Calendar size={13} />
            {post.date}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Clock size={13} />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <Link to={`/post/${post.id}`} style={{ display: 'block' }} className="card-title-link">
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', transition: 'color var(--transition-fast)', lineBreak: 'anywhere' }}>
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden', lineBreak: 'anywhere' }}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
          {post.tags.map((tag) => (
            <span key={tag} style={{ fontSize: '0.75rem', color: 'var(--text-muted)', backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '0.15rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer Meta: Author and Action */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-color)' }}
            />
            <span style={{ fontSize: '0.8rem', fontWeight: '500', color: 'var(--text-primary)' }}>{post.author.name}</span>
          </div>

          <Link to={`/post/${post.id}`} className="read-more-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-primary)' }}>
            Read More
            <ArrowRight size={13} className="arrow-icon" style={{ transition: 'transform var(--transition-fast)' }} />
          </Link>
        </div>
      </div>

      <style>{`
        .blog-card:hover .card-image {
          transform: scale(1.05);
        }
        .card-title-link:hover h3 {
          color: var(--accent-primary) !important;
        }
        .read-more-btn:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </article>
  );
}
