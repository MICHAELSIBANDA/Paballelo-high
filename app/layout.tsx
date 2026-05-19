import type { Metadata, Viewport } from 'next'
import { Poppins, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/context/language-context'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Paballelo High School | We Shall Mount Up On Wings Like Eagles',
  description: 'Paballelo High School in Upington, Northern Cape - Committed to academic excellence, leadership development, sports participation, and community empowerment.',
  keywords: ['Paballelo High School', 'Upington', 'Northern Cape', 'South Africa', 'education', 'high school', 'secondary school', 'academic excellence'],
  authors: [{ name: 'Paballelo High School' }],
  icons: {
    icon: '/paballelo.png',
    apple: '/paballelo.png',
  },
  openGraph: {
    title: 'Paballelo High School | We Shall Mount Up On Wings Like Eagles',
    description: 'Paballelo High School in Upington, Northern Cape - Empowering learners through education, discipline, and excellence.',
    type: 'website',
    images: ['/paballelo.png'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${poppins.variable} ${merriweather.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
