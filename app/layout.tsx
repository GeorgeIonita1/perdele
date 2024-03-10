import { Catamaran } from 'next/font/google';

import Link from 'next/link';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavigationMobile from '@/components/Navigation/NavigationMobile';
import NavigationDesktop from '@/components/Navigation/NavigationDesktop';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';

const catamaran = Catamaran({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${catamaran.className}`}>
          <Header>
            <Link className="font-bold text-lg" href='/'>Logo</Link>
            <a href="tel:+40770123456" className="underline underline-offset-4 mr-auto ml-6 max-md:hidden"><Button variant='link'>0771-234-567</Button></a>

            <NavigationMobile />
            <NavigationDesktop />
          </Header>
          <main className='pt-24'>
            {children}
          </main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
