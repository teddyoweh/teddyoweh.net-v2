'use client'
import teddyimg from '../assets/teddy.jpeg'
import NavigationBar from '../components/NavigationBar' 
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import researchteam from '../assets/researchteam.jpeg'
import diseaseres from '../assets/disease1.jpeg'
import hfsres from '../assets/hfs.jpeg'
import nasares from '../assets/nasares.jpeg'
import { usePathname,useRouter } from 'next/navigation';
import badgeres from '../assets/badge.jpeg'
import {docs} from './page-data'
export default function Docs(){
    return (
        <div className='page'>
            <head>
                    <title>Docs • Teddy Oweh</title>
            </head>
            <NavigationBar/>
            <div className='docs slide-up'>
                <div className="docs-header">
                    <label htmlFor="">
                        Docs.
                    </label>
                </div>
                <div className="docs-page">
                <div className='search-docs'>
                <i class='bx bx-search'></i>
                <input type="text" placeholder="Search Documents" onChange={(e)=>searchAction(e.target.value)} />
                </div>
                <div className='docs-list'>
                    {
                        docs.map((doc,index)=>{
                            return(
                                <>
                                <div key={index} className="teddy-doc">
                                {/* <div className="doc-img">
                                    <img src={doc.img.src} alt="" />
                                </div> */}
                                <div className="doc-content">
                                    <label htmlFor="">
                                        {doc.title}
                                    </label>
                                    <p>
                                        {doc.desc}
                                    </p>
                                    <div className='doc-btn'>
                                        <a href={doc.link} target='_blank'>View Document <span>↗</span></a>
                                    </div>
                                   
                                </div>
                            </div>
                            {
                                index!=docs.length-1?<hr />:''
                            }
                                </>
                            )
                        }
                        )}


                </div>
                </div>

            </div>
            <Footer/>
        </div>


    )
}