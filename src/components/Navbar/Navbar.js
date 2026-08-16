'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import siteContent from '@/data/siteContent';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { nav } = siteContent;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [mounted, setMounted]       = useState(false);
  const pathname = usePathname();
  const onHome      = pathname === '/';
  const darkHero    = pathname === '/pieds';
  const useLightNav = darkHero && !scrolled;

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const resolveHref = (href) => {
    if (href.startsWith('#')) return onHome ? href : `/${href}`;
    return href;
  };

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

  const mobileOverlay = (
    <div
      id="mobile-menu"
      className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
      aria-hidden={!mobileOpen}
    >
      <div className={styles.mobileHeader}>
        <a href="/" className={styles.mobileLogo} onClick={() => setMobileOpen(false)}>
          <span className={styles.mobileLogoText}>{nav.logoText}</span>
          <span className={styles.mobileLogoYear}>'{nav.logoYear}</span>
        </a>
        <button
          className={styles.mobileClose}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <span /><span />
        </button>
      </div>

      <nav className={styles.mobileLinks}>
        {nav.links.map((link, i) => (
          <a
            key={link.label}
            href={resolveHref(link.href)}
            className={styles.mobileLink}
            style={{ transitionDelay: mobileOpen ? `${i * 60 + 80}ms` : '0ms' }}
            onClick={() => setMobileOpen(false)}
          >
            <span className={styles.mobileLinkNum}>0{i + 1}</span>
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={resolveHref(nav.ctaHref)}
        className={styles.mobileCta}
        style={{ transitionDelay: mobileOpen ? `${nav.links.length * 60 + 100}ms` : '0ms' }}
        onClick={() => setMobileOpen(false)}
      >
        {nav.ctaText}
      </a>
    </div>
  );

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''} ${useLightNav ? styles.navbarLight : ''}`}
        aria-label="Main navigation"
      >
        <div className={styles.container}>

          {/* Logo */}
          <a href="/" className={styles.logo}>
            <Image src="/ignite-logo.png" alt="" width={18} height={18} className={styles.logoIcon} aria-hidden="true" />
            <span className={styles.logoText}>{nav.logoText}</span>
            <span className={styles.logoYear}>'{nav.logoYear}</span>
          </a>

          {/* Nav links — centered */}
          <div className={styles.navLinks}>
            {nav.links.map((link) => {
              const active = pathname === link.href;
              return (
                <a
                  key={link.label}
                  href={resolveHref(link.href)}
                  className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a href={resolveHref(nav.ctaHref)} className={styles.ctaBtn}>
            {nav.ctaText}
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen((o) => !o)}
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
