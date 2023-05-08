"use client"
import teddyimg from '../assets/teddy.jpeg'
import NavigationBar from '../components/NavigationBar' 
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import researchteam from '../assets/researchteam.jpeg'
import diseaseres from '../assets/disease1.jpeg'
import hfsres from '../assets/hfs.jpeg'
import nasares from '../assets/nasares.jpeg'
import {researches} from './page-data'
import { usePathname,useRouter } from 'next/navigation';
import badgeres from '../assets/badge.jpeg'

export default function Research(){
    const pathname = usePathname();
    const router = useRouter();
    return (
        <div className='page'>
             <head>
                <title>Research • Teddy Oweh</title>
            </head>
                <NavigationBar/>
            <div className='research slide-up'>
                <div className="research-header">
                    <label htmlFor="">
                        Research.
                    </label>
                </div>
                <div className="research-content">
                    <div className="research-img">
                        <img src={researchteam.src} alt="" />
                        <label htmlFor="">
                            Tarleton Pers Research Symposium '23 / <a target='_blank'href="https://www.tarleton.edu/president/about-dr-hurley-2/">Dr. James Hurley<span>↗</span></a>
                        </label>
                    </div>
                    <div className="research-list">
                        {researches.map((research,index)=>{
                            return(
                                <>
                        
                                <div className="research-teddy">
                                <div className="research-teddy-content">
                                    <label htmlFor="">
                                   {research.title}
        
                                    </label>
                                    <p>
                                        {research.desc}
                                    </p>
                                </div>
                                <div className="research-teddy-img">
                                    <img src={research.img.src} alt="" />
                                    <a  onClick={()=>router.push(`${pathname}/${research.slug}`)}>View   <span>↗</span></a>
                                </div>
        
                            </div>
                            {
                                index!=researches.length-1?<hr />:''
                            }
                            </>
                            )
                        })

                        }
                   
                 
                    </div>
                    <div className='research-badge'>
                        <img src={badgeres.src} alt="Teddy Oweh Student Research Badge" />

                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}