import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ContextWrapper } from '@/components/MenuListContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Navigation Menu',
  description: 'Droplo Recruitment Task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="w-[min(98%,1650px)] mx-auto py-16">
          <ContextWrapper>{children}</ContextWrapper>
        </div>
      </body>
    </html>
  );
}
