'use client'
import teddyimg from '../../assets/teddy.jpeg'
import NavigationBar from '../../components/NavigationBar' 
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import researchteam from '../../assets/researchteam.jpeg'
import diseaseres from '../../assets/disease1.jpeg'
import hfsres from '../../assets/hfs.jpeg'
import nasares from '../../assets/nasares.jpeg'
import { usePathname,useRouter } from 'next/navigation';
import badgeres from '../../assets/badge.jpeg'
import {docs} from '../page-data'
export default function DocsPage({params}){
    const router = useRouter();

    function getDocBySlug(slug) {
        const doc = docs.find(doc => doc.slug === slug);

        return doc ? doc : null;
    }
    const { slug } = params
    const data = getDocBySlug(slug)


    return (
        <div className='page'>
            <NavigationBar/>
        </div>
    )
}