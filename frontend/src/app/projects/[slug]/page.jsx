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
import {projects,filters,prlanguagesa} from '../pagedata'
import { useRouter } from 'next/navigation';
export default function ProjectsPage({params,slug}){
    function getProjectBySlug(slug) {
        const project = projects.find(project => project.slug === slug);
        return project ? project : null;
    }
    const router = useRouter();
      
 
    const data = getProjectBySlug(slug)
  
    console.log(slug)
    return (
        <div className='page'>
                <NavigationBar/>
           
            <div className='projects projects-page slide-up'>
                <div className='top-back' onClick={()=>router.back()}>
                <i class='bx bx-chevron-left'></i>
                <label htmlFor="">Projects</label>



                </div>
                {
                      data!=null?
                      <div className='projects-page-page'>
                      <div className="projects-page-header">
                          <label htmlFor="">
                              {data.title}
                          </label>
                      </div>
                      <div className="projects-page-content">
                          <div className="projects-page-bio">
                              <p>
                                  {data.long_description}
                              </p>
                          </div>
                          <div className='langs'>
                          {
                                        data.languages.map((prlanguage,index)=>{
                                            return (
                                                <div className='pr-dvi'>
                                                {prlanguagesa(prlanguage).div}
                                                {
                                                    index!=data.languages.length-1?
                                                    <div className='pr-dv-divider'>
                                                 
                                                    </div>:null
                                                }
                                                </div>
                                            )
                                        })
                                    
                                    }

                          </div>
                          
                          <div className='tags'>
                            {
                                data.tags.map((tag,index)=>{
                                    return (
                                        <div className='tag'>
                                            <label htmlFor="">{tag}</label>
                                        </div>
                                    )
                                }
                                )
                            }

                          </div>
                          <div className='socials'>
                            {
                                data.sourcecode&&
                         
                                <div className='social'>
                                    <a href={data.sourcecode} target='_blank'>Source Code <span>↗</span></a>
                                </div>
                                   }
                                {
                                    data.documenation&&
                             
                                <div className='social'>
                                    <a href={data.documenation} target='_blank'>Documentation <span>↗</span></a>
                                </div>
                                   }
                                {
                                    data.pypipackge &&
                              
                                <div className='social'>
                                    <a href={data.pypipackge} target='_blank'>PyPi Package<span>↗</span></a>
                                </div>
                                  }
                                   {
                                    data.website &&
                              
                                <div className='social'>
                                    <a href={data.website} target='_blank'>Website<span>↗</span></a>
                                </div>
                                  }
                          </div>
                      </div>
  
                  </div>:
                  <div className='project-not-found'>
                    <label htmlFor="">
                        Project not found
                    </label>
                    
                  </div>

                      
                }
              
            </div>
            <Footer/>
        </div>    
        )
            }