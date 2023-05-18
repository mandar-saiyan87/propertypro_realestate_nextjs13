import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PropertyPro - Find Your Dream Home',
  description: `Welcome to PropertyPro, 
  your ultimate destination for all your real estate needs.
  Whether you are looking to buy, sell, rent, or invest in properties,
  we are here to make your real estate journey seamless and rewarding.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
