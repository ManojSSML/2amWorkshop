'use client';

import { useEffect, useRef, useState } from 'react';

export default function EyewearSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} data-section="eyewear" id="eyewear" style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '900px',
      overflow: 'hidden',
      background: '#1a1a18',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url('/eyewear.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.62) 100%)',
      }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
        <div style={{
          width: '100%',
          maxWidth: '968px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <div style={{
            maxWidth: '340px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
          }}>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: '3rem',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '24px',
            }}>
              Not every,<br />turning point arrives<br />with certainty.
            </h2>
            <p style={{
              fontFamily: 'var(--sans)',
              fontSize: '1.05rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.82)',
            }}>
              Sometimes it begins with a question.
              Sometimes with a conversation.
              Sometimes with a workshop.
              And before you realize it,
              you're seeing possibilities you couldn't see before.
              At 2AMWORKSHOP.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}