import type React from 'react'
import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'

import '@/styles/globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'Tobika',
  description: 'The perfect place for who watch everything.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.className} antialiased`}>{children}</body>
    </html>
  )
}
