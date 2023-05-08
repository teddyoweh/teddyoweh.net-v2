import './globals.css'
import { Inter } from 'next/font/google'
import './styles/nav.scss'
import './styles/home.scss'
import './styles/about.scss'
import './styles/research.scss'
import './styles/projects.scss'
import teddyimg from './assets/oweh.jpg'
import logo from './assets/TO.png'
const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head';
import icon from './icon'
import { log } from 'console'
export const metadata = {
  title: 'Teddy Oweh - Software Engineer (ML)',
  description: 'Software Engineer (ML), CS (Artificial Intelligence & Data Science) + Math.',
 

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
      {/* <link rel="icon" href={logo.src} sizes='80x80' /> */}
      <meta property="og:title" content="Teddy Oweh - Software Engineer (ML)" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://teddyoweh.net" />
    <meta property="og:image" content={teddyimg.src} />
    <meta property="og:description" 
  content="Software Engineer (ML), CS (Artificial Intelligence & Data Science) + Math." />
  <meta property="og:site_name" content="TeddyOweh" />
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nanum+Pen+Script&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </head>
    
      <body className={inter.className}>{children}</body>
    </html>
  )
}
