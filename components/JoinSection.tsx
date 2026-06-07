'use client';

import { useEffect, useRef, useState } from 'react';

export default function JoinSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} data-section="join" id="join" style={{
      background: '#EDECEA',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '968px',
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        boxSizing: 'border-box',
      }} className="join-inner">

        <div style={{
          flex: '1 1 auto',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s',
        }}>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: '3rem',
            fontWeight: 400,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: '#1a1a18',
            marginBottom: '24px',
          }}>
            Join us
          </h2>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '1.2rem',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(26,26,24,0.6)',
            marginBottom: '36px',
          }}>
            Sesame is an interdisciplinary team of artists, makers, and engineers focused on bringing ambient intelligence to daily life.{' '}
            <a href="/team" style={{ color: 'rgba(26,26,24,0.75)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Learn more about our team and mission
            </a>.
          </p>
          <a href="/careers" style={{
            display: 'inline-block',
            fontFamily: 'var(--sans)',
            fontSize: '14px',
            fontWeight: 500,
            color: '#1a1a18',
            textDecoration: 'none',
            padding: '13px 28px',
            border: '1.5px solid rgba(26,26,24,0.3)',
            borderRadius: '100px',
            letterSpacing: '0.01em',
            transition: 'border-color 0.25s, transform 0.25s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,26,24,0.8)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,26,24,0.3)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
          >
            Careers at Sesame
          </a>
        </div>

        <div style={{
          flexShrink: 0,
          width: '500px',
          height: '384px',
          maxWidth: '100%',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            overflow: 'hidden',
            background: '#d4c9b4',
          }}>
            <img
              src="/joinus.jpeg"
              alt="Join us"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 1024px) {
          .join-inner { gap: 40px !important; }
          .join-inner > div:last-child { width: 400px !important; height: 307px !important; }
        }
        @media (max-width: 768px) {
          .join-inner { padding: 80px 24px !important; flex-direction: column !important; gap: 40px !important; }
          .join-inner > div:last-child { width: 100% !important; height: 260px !important; }
        }
      `}</style>
    </section>
  );
}