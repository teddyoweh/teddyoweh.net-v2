'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';

export default function NavigationBar(){
    const path = usePathname();
    const pathnamed = ()=>{
        return path.split('/')[1]

    }
    const pathname = pathnamed()

     return (
        
 


        <nav className="">
            <div className="teddy-name">
                <Link href='./'>
                    <label> Teddy Oweh.</label>
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
                <div className={pathname=='involvments'?"nav-link active":"nav-link"}>
                    <Link href='./about'>
                        <label for="">Involvements</label>
                    </Link>
                    <span/>
                </div>
                <div className="nav-link">
                    <Link href='./about'>
                        <label for="">Docs</label>
                    </Link>
                    <span/>
                </div>
                

            </div>


        </nav>
   
    )
}