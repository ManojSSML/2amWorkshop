'use client';

import { useEffect, useRef, useState } from 'react';

const LOGOS = [
  { src: '/partners/3.svg', alt: 'Partner 1' },
  { src: '/partners/4.svg', alt: 'Partner 2' },
  { src: '/partners/5.svg', alt: 'Partner 3' },
  { src: '/partners/6.svg', alt: 'Partner 4' },
  { src: '/partners/7.svg', alt: 'Partner 5' },
  { src: '/partners/8.svg', alt: 'Partner 6' },
  { src: '/partners/9.svg', alt: 'Partner 7' },
  { src: '/partners/10.svg', alt: 'Partner 8' },
  { src: '/partners/11.svg', alt: 'Partner 9' },
];

function PartnersSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="partnerships"
      data-section="partners"
      data-section-light="true"
      style={{
        background: '#EDECEA',
        width: '100%',
        padding: '80px 0 90px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '968px',
          margin: '0 auto',
          padding: '0 32px',
          boxSizing: 'border-box',
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '48px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(26,26,24,0.4)',
              marginBottom: '10px',
            }}
          >
            Our Partners
          </p>

          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '2rem',
              fontWeight: 400,
              color: '#1a1a18',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Facilitators & Industry Experts
          </h2>

          <div
            style={{
              width: '40px',
              height: '2px',
              background: '#c8b89a',
              margin: '0 auto',
              borderRadius: '1px',
            }}
          />
        </div>

        {/* Logo Grid */}
        <div
          className="partners-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '14px',
          }}
        >
          {LOGOS.map((logo, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: '0.5px solid rgba(26,26,24,0.1)',
                borderRadius: '12px',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 20px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${
                  0.1 + i * 0.07
                }s, transform 0.6s ease ${
                  0.1 + i * 0.07
                }s, border-color 0.2s`,
                cursor: 'default',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  'rgba(26,26,24,0.25)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  'rgba(26,26,24,0.1)')
              }
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: '147px',
                  maxHeight: '147px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',

                  ...(logo.src === '/partners/8.jpeg' ||
                  logo.src === '/partners/10.jpeg'
                    ? {
                        mixBlendMode: 'multiply',
                      }
                    : {}),

                  opacity: 0.6,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.opacity = '1')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.opacity = '0.6')
                }
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .partners-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default PartnersSection;