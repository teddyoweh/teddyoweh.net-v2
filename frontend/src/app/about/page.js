"use client"
import teddyimg from '../assets/oweh.jpeg'
import NavigationBar from '../components/NavigationBar' 
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
export default function AboutPage() {
  
    return (
        <div className='page'>
            <head>
                <title>About • Teddy Oweh</title>
            </head>
             <NavigationBar/>
            <div className='about slide-up'>
                <div className="about-header">
                    <label htmlFor="">
                        Ifechukwudeni (Teddy) Oweh.
                    </label>
                </div>
                <div className="about-bio">
            <p>
                Software Engineer (ML), CS (Artificial Intelligence & Data Science) + Math  <a href="https://tarleton.edu">@Tarleton State  <span>↗</span> </a>
                
            </p>

                </div>
                <div className='about-content'>
                    <div className='about-img'>
                        <img src={teddyimg.src} alt='Teddy Oweh'/>
                        <label htmlFor="">
                            Apple HQ, Cupertino, California  / <a target='_blank'href="https://www.youtube.com/watch?v=FzcfZyEhOoI">Apple Park<span>↗</span></a>
                        </label>
                    </div>
                    <div className="about-teddy">
                        <p>
                            I am a software engineer with a background in computer science and mathematics. I am currently a undergraduate student at Tarleton State University, pursuing a Bachelors degree in Computer Science with a focus on Artificial Intelligence and Data Science.
                             <br />
                             <br />
                             I am also current leading a research team <a href="https://tarleton.edu">@Tarleton State - Machine Intelligence Security and Research Lab  <span>↗</span> </a>,
                             President of the <a href="">Tarleton Computer Society<span>↗</span></a> 
                             <br />
                             <br />
                             Big fan of opensource development, i have built several libraries, modules, packages & tools, in database, networking systems, algorithms, web-frameworks & machine learning/ai fields
                             all opensourced <a href="https://github.com/teddyoweh">Github - @teddyoweh<span>↗</span></a>

                             <br />
                             <br />
                             Die hard ping pong player and leetcode solver.


                         </p>
                         <Link href='research' className='viewbtn'>
                     
                  Research <span>↗ </span>
                         </Link>
                    </div>
          

                </div>
                
            </div>
            <Footer/>
        </div>
    )
}