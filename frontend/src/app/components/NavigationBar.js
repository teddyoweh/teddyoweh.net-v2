'use client'
import { useState } from "react";
import Link from "next/link"
import { usePathname} from 'next/navigation';
import Analytics from './Analytics'
 
export default function NavigationBar(){
    const path = usePathname();
 
    const pathnamed = ()=>{
        return path.split('/')[1]

    }
    const [win,setWin] = useState(null)
 
    const [open,setOpen] = useState(null)
    const pathname = pathnamed()
    const getWindow = () => {
        setWin(window)
      };

      useState(()=>{
        setWin(window)

      },[])
     return (
        win &&
        <>
    <Analytics url={win.location.hostname +path}/>
        <nav className="">
            <div className="teddy-name">
                <Link href='./'>
                    <>
              
                    <label> Teddy Oweh.</label>
                    <label> TO</label>
                    </>
                </Link> 
            </div>
            <div className="nav-links">
                <div  className={pathname=='about'?"nav-link active":"nav-link"}>
                    <Link href='./about'>
                        <label for="">About</label>
                    </Link>
                    <span/>
                </div>
                <div className={pathname=='research'?"nav-link active":"nav-link"}>
                    <Link href='./research'>
                        <label for="">Research</label>
                    </Link>
                <span/>
                </div>
                <div  className={pathname=='projects'?"nav-link active":"nav-link"}>
                    <Link href='./projects'>
                        <label for="">Projects</label>
                    </Link>
                    <span/>
                </div>
                {/* <div className={pathname=='involvments'?"nav-link active":"nav-link"}>
                    <Link href='./about'>
                        <label for="">Involvements</label>
                    </Link>
                    <span/>
                </div> */}
                <div className="nav-link">
                    <Link href='./docs'>
                        <label for="">Docs</label>
                    </Link>
                    <span/>
                </div>
                

            </div>
            <a onClick={()=>setOpen(true)} className="menuicon">

            <i class='bx bx-menu'></i>
            </a>
            {
                open!=null&&
          
            <div className={open==true?"menubox nav-in":"menubox nav-out"}>
                <div className="cancel-div">
                <div className="teddy-name">
                <Link href='./'>
                    <>
              
                    <label> Teddy Oweh.</label>
                    <label> TO</label>
                    </>
                </Link> 
            </div>
                    <a onClick={()=>setOpen(false)} className="cancel-icon">
                    <i class='bx bx-x'></i>
                    </a>

                </div>
            <div className="nav-links">
                <div  className={pathname=='about'?"nav-link active":"nav-link"}>
                    <Link href='./about'>
                        <label for="">About</label>
                    </Link>
                    <span/>
                </div>
                <div className={pathname=='research'?"nav-link active":"nav-link"}>
                    <Link href='./research'>
                        <label for="">Research</label>
                    </Link>
                <span/>
                </div>
                <div  className={pathname=='projects'?"nav-link active":"nav-link"}>
                    <Link href='./projects'>
                        <label for="">Projects</label>
                    </Link>
                    <span/>
                </div>
                <div className={pathname=='involvments'?"nav-link active":"nav-link"}>
                    <Link href='./involvements'>
                        <label for="">Involvements</label>
                    </Link>
                    <span/>
                </div>
                <div className={pathname=='docs'?"nav-link active":"nav-link"}>
                    <Link href='./docs'>
                        <label for="">Docs</label>
                    </Link>
                    <span/>
                </div>
                

            </div>
            </div>
              }


        </nav>
        </>
   
    )
}