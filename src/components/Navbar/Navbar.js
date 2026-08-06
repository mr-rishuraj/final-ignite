'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import siteContent from '@/data/siteContent';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { nav } = siteContent;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const pathname = usePathname();
  const onHome   = pathname === '/';

  // Prefix anchor links with '/' when not on the homepage
  const resolveHref = (href) => {
    if (href.startsWith('#')) return onHome ? href : `/${href}`;
    return href;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Freeze the page behind the full-screen mobile overlay
  useEffect(() => {
    document.body.dataset.scrollLocked = mobileOpen ? 'true' : 'false';
    return () => { document.body.dataset.scrollLocked = 'false'; };
  }, [mobileOpen]);

  // Escape closes the overlay
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src="/ignite-logo.png" alt="IGNITE" className={styles.logoIcon} />
          <span className={styles.logoText}>IGNITE</span>
        </a>

        <div className={styles.navLinks}>
          {nav.links.map((link) => (
            <a key={link.label} href={resolveHref(link.href)} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </div>

        <a href={resolveHref(nav.ctaHref)} className={styles.ctaBtn}>{nav.ctaText}</a>

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

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileMenuInner}>
          {nav.links.map((link) => (
            <a key={link.label} href={resolveHref(link.href)} className={styles.mobileLink} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a href={resolveHref(nav.ctaHref)} className={styles.mobileCta} onClick={handleLinkClick}>
            {nav.ctaText}
          </a>
        </div>
      </div>
    </nav>
  );
}
