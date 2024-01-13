import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavigationMobile from '@/components/NavigationMobile';
import NavigationDesktop from '@/components/NavigationDesktop';

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header>
            <>
              <Link className="font-bold text-lg" href='/'>Logo</Link>
              <NavigationMobile />
              <NavigationDesktop />
            </>
          </Header>
          <main className='pt-24'>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
