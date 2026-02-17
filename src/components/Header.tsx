"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo-text">AURA <span className="highlight">LUXE</span></Link>

        <nav className="nav-menu">
          <Link href="#shop" className="nav-link">Shop</Link>
          <Link href="#collections" className="nav-link">Collections</Link>
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button className="icon-btn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition);
          background: transparent;
        }

        .header.scrolled {
          padding: 1rem 0;
          background: rgba(var(--background-rgb), 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          background: var(--background);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .highlight {
          font-weight: 700;
          color: var(--primary);
        }

        .nav-menu {
          display: flex;
          gap: 3rem;
        }

        .nav-link {
          font-size: 0.7rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 2px;
          opacity: 0.6;
        }

        .nav-link:hover {
          opacity: 1;
          color: var(--primary);
        }

        .header-actions {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .icon-btn {
          position: relative;
          color: var(--text-main);
          opacity: 0.8;
        }

        .icon-btn:hover {
          opacity: 1;
        }

        .cart-count {
          position: absolute;
          top: -6px;
          right: -6px;
          background: var(--primary);
          color: var(--background);
          font-size: 0.5rem;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
