import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juris Source - The Dispute Resolution Firm',
  description: 'Professional dispute resolution and legal services in Delhi and Greater Noida. Experienced attorneys specializing in alternative dispute resolution.',
  keywords: 'dispute resolution, legal services, attorney, lawyer, mediation, arbitration, Delhi, Greater Noida',
  authors: [{ name: 'Juris Source' }],
  openGraph: {
    title: 'Juris Source - The Dispute Resolution Firm',
    description: 'Professional dispute resolution and legal services',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
