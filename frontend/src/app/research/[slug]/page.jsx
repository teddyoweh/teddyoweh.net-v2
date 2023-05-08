"use client"
import { useState } from 'react'
import teddyimg from '../../assets/teddy.jpeg'
import NavigationBar from '../../components/NavigationBar' 
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import researchteam from '../../assets/researchteam.jpeg'
import diseaseres from '../../assets/disease1.jpeg'
import hfsres from '../../assets/hfs.jpeg'
import nasares from '../../assets/nasares.jpeg'
import nasacoding from '../../assets/nasacoding.jpeg'
import {researches} from '../page-data'
import { useRouter } from 'next/navigation';
export default function ResearchPage({params}){
    function getResearchBySlug(slug) {
        const research = researches.find(research => research.slug === slug);
        return research ? research : null;
    }
    const router = useRouter();
      
    const { slug } = params
    const data = getResearchBySlug(slug)
  
 
    return (
        <div className='page'>
            
                <NavigationBar/>
            <div className='research research-page slide-up'>
                <div className='top-back' onClick={()=>router.back()}>
                    <i class='bx bx-chevron-left'></i>
                    <label htmlFor="">Research</label>
                </div>
                {
                        data!=null?
                        <div className='research-page-page'>
                            <div className="research-page-header">
                                <label htmlFor="">
                                    {data.title}
                                </label>
                            </div>
                            <div className="research-page-content">
                                <p>
                                    {data.long_desc}
                                </p>
                            </div>
                            <div className='links'>
                                <a href="" target='_blank'>
                                    Documents
                                    <span>↗</span>
                                </a>

                            </div>
                          {data.gallery}
                        </div>
                        :
                        <div className='project-not-found'>
                        <label htmlFor="">
                            Research not found
                        </label>
                        
                      </div>
                }
                
            </div>
            <Footer/>
        </div>    
        )
            }

    