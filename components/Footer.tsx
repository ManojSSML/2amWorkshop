'use client';

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#') || href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const NAV_LINKS = [
    { label: 'Home',          href: '/'              },
    { label: 'About Us',      href: '#agents'        },
    { label: 'Why Us !!',     href: '#eyewear'       },
    { label: 'Join Workshop', href: '#join'          },
    { label: 'Partnerships',  href: '#partnerships'  },
    { label: 'Community',     href: '#footer'        },
  ];

  return (
    <footer id="footer" style={{
      background: '#1a0e0a',
      width: '100%',
      padding: '40px 0 32px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '968px',
        margin: '0 auto',
        padding: '0 32px',
      }}>

        {/* Light logo */}
        <div style={{ marginBottom: '32px', height: '90px', overflow: 'hidden', display: 'flex', alignItems: 'center', marginLeft: '-37px' }}>
          <img
            src="/logo-light.svg"
            alt="Logo"
            style={{ height: '320px', width: 'auto', display: 'block', opacity: 0.15 }}
          />
        </div>

        {/* 3-column link grid */}
        <div className='footer-grid' style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '16px 0',
          marginBottom: '32px',
        }}>

          {/* Col 1 — main nav links (first 3) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {NAV_LINKS.slice(0, 3).map(({ label, href }) => (
              <a key={label} href={href}
                onClick={(e) => scrollTo(e as React.MouseEvent<HTMLAnchorElement>, href)}
                style={{
                  fontFamily: 'var(--sans)', fontSize: '15px', fontWeight: 400,
                  color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >{label}</a>
            ))}
          </div>

          {/* Col 2 — remaining nav links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {NAV_LINKS.slice(3).map(({ label, href }) => (
              <a key={label} href={href}
                onClick={(e) => scrollTo(e as React.MouseEvent<HTMLAnchorElement>, href)}
                style={{
                  fontFamily: 'var(--sans)', fontSize: '15px', fontWeight: 400,
                  color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >{label}</a>
            ))}
          </div>

          {/* Col 3 — socials */}
          <div className='social-col' style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'Instagram', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
              { label: 'Twitter', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              { label: 'LinkedIn', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 0 22.222 0h.003z"/></svg> },
            ].map(({ label, icon }) => (
              <a key={label} href="#" style={{
                display: 'flex', alignItems: 'flex-start', gap: '10px',
                fontFamily: 'var(--sans)', fontSize: '15px', fontWeight: 400,
                color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >{icon}{label}</a>
            ))}
          </div>
        </div>

        {/* Address */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '32px' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.35)', lineHeight: '1.5' }}>
            1 Ropemaker St, Moorgate, London EC2Y 9AW
          </span>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            Copyright © 2026 2AMWORKSHOP Inc. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Terms and conditions', 'Privacy policy'].map(item => (
              <a key={item} href="#" style={{
                fontFamily: 'var(--sans)', fontSize: '13px',
                color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >{item}</a>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px 0 !important; }
          .social-col { grid-column: 1 / -1 !important; flex-direction: row !important; gap: 24px !important; flex-wrap: wrap !important; }
        }
      `}</style>
    </footer>
  );
}