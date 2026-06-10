'use client';

export default function JoinSection() {
  return (
    <section
      data-section="join"
      id="join"
      style={{
        background: '#EDECEA',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
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
        className="join-inner"
      >
        <div
          style={{
            flex: '1 1 auto',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '3rem',
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#1a1a18',
              marginBottom: '24px',
            }}
          >
            Join us
          </h2>

          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '1.2rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(26,26,24,0.6)',
              marginBottom: '36px',
              whiteSpace: 'pre-line',
            }}
          >
            {`Not every turning point feels significant at first,Sometimes it begins with an afternoon,A room full of curious minds,A new perspective,A skill you didn't know you needed,And a future that looks slightly different when you leave, `}
            <span
              style={{
                fontWeight: 700,
                color: '#1a1a18',
              }}
            >
              AT 2AMWorkshop.
            </span>
          </p>

          <a
            href="/careers"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--sans)',
              fontSize: '14px',
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
              e.currentTarget.style.transform =
                'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                'rgba(26,26,24,0.3)';
              e.currentTarget.style.transform =
                'translateY(0)';
            }}
          >
            Careers at 2AMWorkshop
          </a>
        </div>

        <div
          style={{
            flexShrink: 0,
            width: '500px',
            height: '384px',
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
              src="/joinus.jpeg"
              alt="Join us"
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
          .join-inner {
            gap: 40px !important;
          }

          .join-inner > div:last-child {
            width: 400px !important;
            height: 307px !important;
          }
        }

        @media (max-width: 768px) {
          .join-inner {
            padding: 80px 24px !important;
            flex-direction: column !important;
            gap: 40px !important;
          }

          .join-inner > div:last-child {
            width: 100% !important;
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}