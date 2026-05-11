import type { Metadata } from 'next'
import { Playfair_Display, Outfit, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
})

const dancing = Dancing_Script({ 
  subsets: ["latin"],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JV Júlia Vitória | Nail Designer - Unhas Sofisticadas em Goiânia',
  description: 'Transforme suas unhas em obras de arte. Nail designer especializada em unhas sofisticadas, alongamento e nail art. Atendimento delicado e exclusivo em Goiânia. Agende seu horário!',
  keywords: ['nail designer', 'unhas', 'alongamento de unhas', 'nail art', 'manicure', 'Goiânia', 'Júlia Vitória', 'unhas sofisticadas'],
  authors: [{ name: 'Júlia Vitória' }],
  openGraph: {
    title: 'JV Júlia Vitória | Nail Designer',
    description: 'Sua beleza começa nos detalhes. Unhas sofisticadas e atendimento exclusivo.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport = {
  themeColor: '#C9A992',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${outfit.variable} ${dancing.variable} bg-[#F6F2E9]`}>
      <body className="font-sans antialiased bg-[#F6F2E9] text-[#2D2926] overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
