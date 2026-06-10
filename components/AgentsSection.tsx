'use client';

export default function AgentsSection() {
  return (
    <section
      data-section="agents"
      id="agents"
      style={{
        background: '#EDECEA',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '968px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
          boxSizing: 'border-box',
        }}
        className="agents-inner"
      >
        <div
          style={{
            flex: '1 1 auto',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '2.6rem',
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#1a1a18',
              marginBottom: '24px',
            }}
          >
            A collection of <br />
            Gathered thoughts.
            <br />
            with purpose.
          </h2>

          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '1.1rem',
              fontWeight: 500,
              lineHeight: 1.7,
              color: '#706567',
              marginBottom: '36px',
            }}
          >
            Think out loud. Follow a thread. Discover something
            unexpected. Workshops by 2amWorkshop.
          </p>

          <a
            href="/mobile-preview"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--sans)',
              fontSize: '15px',
              fontWeight: 500,
              color: '#1a1a18',
              textDecoration: 'none',
              padding: '13px 28px',
              border: '1.5px solid rgba(26,26,24,0.3)',
              borderRadius: '15px',
              letterSpacing: '0.01em',
              transition: 'border-color 0.25s, transform 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                'rgba(26,26,24,0.8)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                'rgba(26,26,24,0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get the Preview
          </a>
        </div>

        <div
          style={{
            flexShrink: 0,
            width: '500px',
            height: '384.61px',
            maxWidth: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#d4c9b4',
            }}
          >
            <img
              src="/agentsection.jpeg"
              alt="Agents section"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .agents-inner {
            gap: 40px !important;
          }

          .agents-inner > div:last-child {
            width: 400px !important;
            height: 307px !important;
          }
        }

        @media (max-width: 768px) {
          .agents-inner {
            padding: 80px 24px !important;
            flex-direction: column !important;
            gap: 40px !important;
          }

          .agents-inner > div:last-child {
            width: 100% !important;
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}