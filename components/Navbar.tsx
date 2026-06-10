'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'About Us', href: '#agents' },
  { label: 'Why Us !!', href: '#eyewear' },
  { label: 'Join Workshop', href: '#join' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Community', href: '#footer' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const NAVBAR_HEIGHT = 72;

      const lightSections = document.querySelectorAll(
        '[data-section="agents"], [data-section="join"], [data-section="room"], [data-section="partners"]'
      );

      let overLight = false;

      lightSections.forEach((section) => {
        const rect = (section as HTMLElement).getBoundingClientRect();

        if (
          rect.top <= NAVBAR_HEIGHT &&
          rect.bottom > NAVBAR_HEIGHT
        ) {
          overLight = true;
        }
      });

      setIsDark(!overLight);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith('#') || href === '#') return;

    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setMenuOpen(false);
  };

  const textColor = isDark ? '#ffffff' : '#111111';

  const navbarBg = isDark
    ? 'transparent'
    : 'rgba(237,236,234,0.95)';

  const linkStyle: React.CSSProperties = {
    color: textColor,
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    opacity: 1,
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          height: '72px',
          background: navbarBg,
          backdropFilter: isDark ? 'none' : 'blur(12px)',
          borderBottom: isDark
            ? 'none'
            : '1px solid rgba(0,0,0,0.08)',
          transition:
            'background 0.3s ease, border-color 0.3s ease',
          outline: 'none',
        }}
      >
        <div
          style={{
            maxWidth: '968px',
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 24px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '72px',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            <img
              src={isDark ? '/logo-light.svg' : '/logo-dark.svg'}
              alt="Logo"
              style={{
                height: '251px',
                width: 'auto',
                maxWidth: '264px',
                cursor: 'pointer',
                transition: 'opacity 0.3s ease',
                display: 'block',
              }}
            />
          </Link>

          {/* Desktop Links */}
          <div
            className="desktop-menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={linkStyle}
                onClick={(e) => scrollTo(e, href)}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              width: '36px',
              height: '36px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                background: textColor,
                borderRadius: '2px',
                transition:
                  'transform 0.3s ease, opacity 0.3s ease, background 0.3s ease',
                transform: menuOpen
                  ? 'translateY(6.5px) rotate(45deg)'
                  : 'none',
              }}
            />

            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                background: textColor,
                borderRadius: '2px',
                transition:
                  'opacity 0.3s ease, background 0.3s ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />

            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                background: textColor,
                borderRadius: '2px',
                transition:
                  'transform 0.3s ease, opacity 0.3s ease, background 0.3s ease',
                transform: menuOpen
                  ? 'translateY(-6.5px) rotate(-45deg)'
                  : 'none',
              }}
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            background: 'rgba(237,236,234,0.98)',
            backdropFilter: 'blur(12px)',
            zIndex: 998,
            overflow: 'hidden',
            maxHeight: menuOpen ? '320px' : '0px',
            transition:
              'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: menuOpen
                ? '24px 24px 32px'
                : '0 24px',
              transition: 'padding 0.35s ease',
            }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                style={{
                  color: '#1a1a18',
                  textDecoration: 'none',
                  fontSize: '17px',
                  fontWeight: 500,
                  padding: '14px 0',
                  borderBottom:
                    i < NAV_LINKS.length - 1
                      ? '0.5px solid rgba(26,26,24,0.08)'
                      : 'none',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen
                    ? 'translateY(0)'
                    : 'translateY(-8px)',
                  transition: `opacity 0.3s ease ${
                    0.05 + i * 0.05
                  }s, transform 0.3s ease ${
                    0.05 + i * 0.05
                  }s`,
                  display: 'block',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        .mobile-btn {
          display: none !important;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}