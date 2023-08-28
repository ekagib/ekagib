import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ekagib',
  description: 'Personal website for Eka Gibran Hasany',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
