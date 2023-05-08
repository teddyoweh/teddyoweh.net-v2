import './globals.css'
import { Inter } from 'next/font/google'
import './styles/nav.scss'
import './styles/home.scss'
import './styles/about.scss'
import './styles/research.scss'
import './styles/projects.scss'
import logo from './assets/TO.png'
const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head';
import icon from './icon'
import { log } from 'console'
export const metadata = {
  title: 'Teddy Oweh - Software Engineer (ML)',
  description: 'Software Engineer (ML), CS (Artificial Intelligence & Data Science) + Math.',
  icon:'./assets/TO.png'

}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>Teddy Oweh - Software Engineer (ML)</title>
      <link rel="icon" href={logo.src} />
      <meta property="og:title" content="Teddy Oweh - Software Engineer (ML)" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://teddyoweh.net" />
    <meta property="og:image" content="./assets/teddy.jpeg" />
    <meta property="og:description" 
  content="Software Engineer (ML), CS (Artificial Intelligence & Data Science) + Math." />
  <meta property="og:site_name" content="TeddyOweh" />
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

      </head>
    
      <body className={inter.className}>{children}</body>
    </html>
  )
}
