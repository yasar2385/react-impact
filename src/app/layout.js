import { Inter } from 'next/font/google'
import Script from 'next/script';
import './globals.scss'
import dynamic from 'next/dynamic';
import BoostrapClient from './components/BoostrapClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Newgen IMPACT | Log In',
  description: 'Online Proofing Tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <BoostrapClient />
      </body>
    </html>
  )
}
