import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PokeGet - Daily Pokemon!'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
