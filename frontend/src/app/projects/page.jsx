"use client"
import { useState } from 'react'
import teddyimg from '../assets/teddy.jpeg'
import NavigationBar from '../components/NavigationBar' 
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import researchteam from '../assets/researchteam.jpeg'
import diseaseres from '../assets/disease1.jpeg'
import hfsres from '../assets/hfs.jpeg'
import nasares from '../assets/nasares.jpeg'
import nasacoding from '../assets/nasacoding.jpeg'
import {projects,filters,prlanguagesa} from './pagedata'
import { usePathname,useRouter } from 'next/navigation';
import Head from 'next/head';

export default function Projects(){
    const pathname = usePathname();
    const router = useRouter();
    const [activefilter,setFilter] = useState('All')
    const toggleFilter = (filter)=>{
        setFilter(filter)
    }
    const [projectList, setProjectList] = useState(projects)
    const [search,setSearch] = useState('')

    function searchAction(search) {
        const searchTerm = search.toLowerCase();
        const filteredProjects = projects.filter(project => {
            const { title, description, tags } = project;
            const projectText = `${title.toLowerCase()} ${description.toLowerCase()} ${tags.join(' ').toLowerCase()}`;
            return projectText.includes(searchTerm);
        });
        setProjectList(filteredProjects);
    }
    
    return (
        <div className='page'>
             <head>
                <title>Projects • Teddy Oweh</title>
            </head>
            <NavigationBar/>
            <div className='projects slide-up'>
            <div className="projects-header">
                    <label htmlFor="">
                        Projects.
                    </label>
            </div>
            <div className='projects-content'>
                <p>
                Coding is like a puzzle, and sometimes the best way to solve it is to take a step back and look at the big picture. - <a href=""> Teddy Oweh</a>
                </p>
                <div className="projects-img">
                    <img src={nasacoding.src} alt="" />
                    <label htmlFor="">
                            NASA USLI &apos;23 / <a target='_blank'href="https://www.nasa.gov/centers/marshall/home/index.html">NASA Marshall Space Flight Center<span>↗</span></a>
                        </label>
                </div>
            </div>
            <div className="teddys-projects">
                <div className='search-projects'>
                <i class='bx bx-search'></i>
                <input type="text" placeholder="Search Teddy's Projects" onChange={(e)=>searchAction(e.target.value)} />
                </div>
                <div className='project-filters'>
                    {
                        filters.map((filter,index)=>{
                            return (
                                <div key={index} className={activefilter==filter? "project-filter active":"project-filter"} onClick={()=>toggleFilter(filter)}>
                                    <label htmlFor="">{filter}</label>
                                </div>
                            )
                        }
                        )
                    }
                    

                </div>
                <div className="projects-list">
                    <label htmlFor="" className='header'>{activefilter} Project&apos;s</label>
                    <hr />
                    {
                        projectList.map((project,index)=>{
                            return (
                                <>
                                
                                <div key={index} className={activefilter=='All' || project.tags.includes(activefilter)? "teddys-project":"slide-down project-hide"}>
                                <label htmlFor="">{project.title}</label>
                                <p>{project.description}</p>
                                <div className='pr-dv'>
                                    <div className='pr-dv2'>

                            
                                    {
                                        project.languages.map((prlanguage,index)=>{
                                            return (
                                                <div key={index} className='pr-dvi'>
                                                {prlanguagesa(prlanguage).div}
                                                {
                                                    index!=project.languages.length-1?
                                                    <div className='pr-dv-divider'>
                                                 
                                                    </div>:null
                                                }
                                                </div>
                                            )
                                        })
                                    
                                    }
                                            </div>
                                    <a className='viewbtn' onClick={()=>router.push(`${pathname}/${project.slug}`)}>

                                    View     <span>↗</span>
                                    </a>                                       
                                    
                                </div>
                        
                                </div>
                                <hr />
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