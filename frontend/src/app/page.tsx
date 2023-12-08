import Image from 'next/image'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import teddy from './assets/memojo.png';
import { readdir } from 'fs/promises';
import { join } from 'path';
 
// Usage

export default function Home() {
 
  return (
  <>
      <div className='page'>
        <NavigationBar />
      <Image className='hero-image' src ={teddy.src} width={0} height={0} alt="Teddy Oweh" />

      <div className='hero slide-up'>
        <div className='hero-content'>





          <div className='hero-text'>
            <label className='hero-title'>Pushing machines to <span>brilliance.</span></label>
          
          </div>
          <div className='hero-bio'>
          <p>
          As a software engineer, my primary focus is on integrating machine learning into various applications, including web and mobile applications. I have a strong foundation in networking and cloud computing, which allows me to effectively design and implement these integrations in a scalable and efficient manner.
          </p>
          <br />
          <p>
         Research <a href="https://www.nasa.gov/">@NASA <span>↗</span></a>.

       Prev  AI/ML Intern <a href="https://apple.com">@Apple <span>↗</span></a>.
       Prev ML Systems Research  <a href="https://www.navsea.navy.mil/">@NAVSEA <span>↗</span></a>.

          Lead Student Researcher <a href="https://tarleton.edu">@Tarleton State - Machine Intelligence Security and Research Lab  <span>↗</span> </a>,
          Computational Modelling Researcher  <a href="https://www.tarleton.edu/tiaer">@TIAER - Texas Insititute Applied For Environment Research  <span>↗</span> </a>. 

          </p>
          </div>
          <div className='teddy-socials'>
            <a href="https://www.github.com/teddyoweh" target="_blank">
              <i className='bx bxl-github'></i>
            </a>
            <a href="https://www.linkedin.com/in/teddyoweh" target="_blank">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="https://twitter.com/tedddyoweh"  target="_blank">
              <i className='bx bxl-twitter'></i>
            </a>
            <a href="mailto:teddyoweh@gmail.com">
            <i className='bx bxs-envelope' ></i>
            </a>
              {/* <a href="https://resume.teddyoweh.net">
              <i className='bx bx-file'></i>
              </a> */}
          </div>
        </div>
        <Footer/>
      </div>
    

      </div>
  </>
  )
}
