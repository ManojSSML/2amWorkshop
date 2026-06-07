'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'About Us',       href: '#agents'    },
  { label: 'Why Us !!',      href: '#eyewear'   },
  { label: 'Join Workshop',  href: '#join'      },
  { label: 'Partnerships',   href: '#'          },
  { label: 'Footer',         href: '#footer'    },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const NAVBAR_HEIGHT = 72;
      const lightSections = document.querySelectorAll(
        '[data-section="agents"], [data-section="join"], [data-section="room"]'
      );
      let overLight = false;
      lightSections.forEach((section) => {
        const rect = (section as HTMLElement).getBoundingClientRect();
        if (rect.top <= NAVBAR_HEIGHT && rect.bottom > NAVBAR_HEIGHT) overLight = true;
      });
      setIsDark(!overLight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#') || href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  const textColor = isDark ? '#ffffff' : '#111111';
  const navbarBg = isDark ? 'transparent' : 'rgba(237,236,234,0.95)';
  const borderColor = isDark ? 'transparent' : 'rgba(0,0,0,0.08)';

  const linkStyle: React.CSSProperties = {
    color: textColor,
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    transition: 'color 0.3s ease, opacity 0.2s',
    whiteSpace: 'nowrap',
    opacity: 0.55,
    cursor: 'pointer',
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 999,
        height: '72px',
        background: navbarBg,
        backdropFilter: isDark ? 'none' : 'blur(12px)',
        borderBottom: `1px solid ${borderColor}`,
        transition: 'background 0.3s ease, border-color 0.3s ease',
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: '968px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 32px 0 12px',
          gap: '48px',
        }}>

          <Link href="/" style={{ display: 'flex', alignItems: 'center', height: '72px', flexShrink: 0 }}>
            <img
              src={isDark ? '/logo-light.svg' : '/logo-dark.svg'}
              alt="Logo"
              style={{ height: '251px', width: 'auto', maxWidth: '264px', cursor: 'pointer', transition: 'opacity 0.3s ease', display: 'block' }}
            />
          </Link>

          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={linkStyle}
                onClick={(e) => scrollTo(e, href)}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}
              >
                {label}
              </a>
            ))}
          </div>

          <button
            className="mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', fontSize: '28px', color: textColor, cursor: 'pointer', transition: 'color 0.3s ease', flexShrink: 0 }}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 32px', background: 'white', borderTop: '1px solid #eee' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{ color: '#111', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}
                onClick={(e) => scrollTo(e, href)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}