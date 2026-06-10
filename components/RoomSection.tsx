'use client';

const IMAGES = [
  '/gallery/1.png',
  '/gallery/2.jpeg',
  '/gallery/3.png',
  '/gallery/4.png',
  '/gallery/5.png',
  '/gallery/6.png',
  '/gallery/7.png',
  '/gallery/8.png',
  '/gallery/9.png',
];

function RoomSection() {
  return (
    <section
      data-section="room"
      style={{
        background: '#EDECEA',
        width: '100%',
        padding: '100px 0 120px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '0 32px',
          boxSizing: 'border-box',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 400,
            textAlign: 'center',
            color: '#1a1a18',
            marginBottom: '64px',
            letterSpacing: '-0.01em',
          }}
        >
          Be in the room with&hellip;
        </h2>

        <div
          className="room-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {IMAGES.map((src, i) => (
            <div
              key={i}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '3/4',
                background: '#1a1a18',
              }}
            >
              <img
                src={src}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .room-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
        }
        @media (max-width: 480px) {
          .room-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default RoomSection;