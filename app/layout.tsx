import { Inter } from 'next/font/google';

import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main className='pt-24'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
