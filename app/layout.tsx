import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';

import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SessionProvider from '@/providers/SessionProvider';

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SessionProvider session={session}>
          <Header />
        </SessionProvider>
        <main className='pt-24 md:pt-36'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
