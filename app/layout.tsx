import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sesame',
  description: 'Sesame builds personal agents for curious people.',
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