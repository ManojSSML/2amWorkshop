'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100svh',
      minHeight: '600px',
      overflow: 'hidden',
      background: '#1a1714',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url('/hero.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.38)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '27%',
        left: 0,
        right: 0,
        zIndex: 10,
      }}>
        <div style={{
          width: '100%',
          maxWidth: '968px',
          margin: '0 auto',
          padding: '0 32px',
        }} className="hero-inner">
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: '3.75rem',
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            color: '#ffffff',
            marginBottom: '14px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
          }}>
            Curiosity, met
          </h1>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '1.3rem',
            fontWeight: 300,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.85)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 1s ease 0.55s, transform 1s ease 0.55s',
          }}>
             The World Doesn't Reward Credentials.<br />
             It Rewards Capability.
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .hero-inner { padding: 0 48px !important; } }
        @media (max-width: 768px)  { .hero-inner { padding: 0 24px !important; } }
      `}</style>
    </section>
  );
}