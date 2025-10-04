import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '诗经起名字，楚辞起名字 - 古典文学起名指南',
  description: '《诗经》和《楚辞》是中国古代文学的两部经典之作，其中蕴含着丰富的文化内涵和艺术价值。许多家长在给孩子取名时，会从这两部经典中汲取灵感，为孩子取一个富有文化底蕴的名字。',
  keywords: [
    '诗经起名',
    '楚辞起名', 
    '周易起名',
    '起名声调韵律',
    '好听的名字',
    '男宝宝起名',
    '女宝宝起名',
    '女诗经男楚辞',
    '历史上好听的名字'
  ],
  authors: [{ name: '中国传统文化起名研究院' }],
  robots: 'index, follow',
  openGraph: {
    title: '诗经起名字，楚辞起名字 - 古典文学起名指南',
    description: '基于《诗经》和《楚辞》的古典文学起名网站，提供专业的起名指导和声调搭配建议。',
    type: 'website',
    locale: 'zh_CN',
  },
  icons: {
    icon: '/wx.ico',
    shortcut: '/wx.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2409588554709380" crossOrigin="anonymous"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7SKQ197ZNT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7SKQ197ZNT');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

