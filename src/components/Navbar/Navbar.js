'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import siteContent from '@/data/siteContent';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { nav } = siteContent;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [mounted, setMounted]       = useState(false);
  const pathname = usePathname();
  const onHome   = pathname === '/';

  useEffect(() => { setMounted(true); }, []);

  const resolveHref = (href) => {
    if (href.startsWith('#')) return onHome ? href : `/${href}`;
    return href;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.dataset.scrollLocked = mobileOpen ? 'true' : 'false';
    return () => { document.body.dataset.scrollLocked = 'false'; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  const mobileOverlay = (
    <div
      id="mobile-menu"
      className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
      aria-hidden={!mobileOpen}
    >
      <div className={styles.mobileMenuInner}>
        {nav.links.map((link) => (
          <a
            key={link.label}
            href={resolveHref(link.href)}
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        <a
          href={resolveHref(nav.ctaHref)}
          className={styles.mobileCta}
          onClick={handleLinkClick}
        >
          {nav.ctaText}
        </a>
      </div>
    </div>
  );

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>

          {/* Logo */}
          <a href="/" className={styles.logo}>
            <img src="/ignite-logo.png" alt="IGNITE" className={styles.logoIcon} />
            <span className={styles.logoText}>{nav.logoText}</span>
            <span className={styles.logoYear}>{nav.logoYear}</span>
          </a>

          {/* Nav links with dot separators */}
          <div className={styles.navLinks}>
            {nav.links.map((link, i) => (
              <span key={link.label} className={styles.navItem}>
                {i > 0 && <span className={styles.sep} aria-hidden="true">·</span>}
                <a href={resolveHref(link.href)} className={styles.navLink}>
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          {/* CTA */}
          <a href={resolveHref(nav.ctaHref)} className={styles.ctaBtn}>
            {nav.ctaText}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {mounted && createPortal(mobileOverlay, document.body)}
    </>
  );
}
