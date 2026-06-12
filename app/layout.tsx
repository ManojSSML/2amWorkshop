import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '2AMWorkshop',
  description:
  '2AMWorkshop offers interactive workshops, skill development programs, community learning experiences, and networking opportunities for students, professionals, and lifelong learners.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    // apple: '/apple-icon.png', // optional: add a 180x180 png for iOS home screen
  },
};

export const viewport: Viewport = {
  themeColor: '#ECECE8',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @font-face {
            font-family: "canela";
            src: url('/fonts/CanelaText-Light-Trial.otf') format('opentype');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "diatype";
            src: url('/fonts/ABCDiatype-Regular-Trial.otf') format('truetype');
            font-weight: 320;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}