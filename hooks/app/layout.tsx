import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Alex Rivera | Electronics Engineer Portfolio',
  description: 'Electronics Engineer specializing in RF design, PCB layout, FPGA development, and analog circuit design. Designing tomorrow\'s circuits, today.',
  keywords: ['Electronics Engineer', 'RF Design', 'PCB', 'FPGA', 'Verilog', 'Analog Circuits', 'Alex Rivera'],
  authors: [{ name: 'Alex Rivera' }],
  openGraph: {
    title: 'Alex Rivera | Electronics Engineer',
    description: 'Designing Tomorrow\'s Circuits, Today',
    type: 'website',
    url: 'https://alexrivera.dev',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alex Rivera Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Rivera | Electronics Engineer',
    description: 'Designing Tomorrow\'s Circuits, Today',
    images: ['/og-image.jpg']
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alex Rivera",
              "jobTitle": "Electronics Engineer",
              "description": "Electronics Engineer specializing in RF design, PCB layout, and FPGA development",
              "url": "https://alexrivera.dev",
              "sameAs": [
                "https://github.com/alexrivera",
                "https://linkedin.com/in/alexrivera"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
