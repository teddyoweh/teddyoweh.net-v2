"use client"
import React, {Component,useState, useEffect,useCallback} from 'react';
import axios from 'axios'
import { usePathname } from 'next/navigation';

import {endpoints} from '../config/endpoints'
export default function Analytics(){
    const navpath = usePathname()
    const deviceinfo = () => {
        var sBrowser, sUsrAg = window.navigator.userAgent;
        let operatingSystem = 'Not known';
        if (window.navigator.appVersion.indexOf('Win') !== -1) { operatingSystem = 'Windows OS'; }
        if (window.navigator.appVersion.indexOf('Mac') !== -1) { operatingSystem = 'MacOS'; }
        if (window.navigator.appVersion.indexOf('X11') !== -1) { operatingSystem = 'UNIX OS'; }
        if (window.navigator.appVersion.indexOf('Linux') !== -1) { operatingSystem = 'Linux OS'; }
     
        if (sUsrAg.indexOf("Firefox") > -1) {
            sBrowser = "Mozilla Firefox";
         } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
            sBrowser = "Samsung Internet";
            
        } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
            sBrowser = "Opera";
           
        } else if (sUsrAg.indexOf("Trident") > -1) {
            sBrowser = "Microsoft Internet Explorer";
            
        } else if (sUsrAg.indexOf("Edge") > -1) {
            sBrowser = "Microsoft Edge";
            
        } else if (sUsrAg.indexOf("Chrome") > -1) {
            sBrowser = "Google Chrome or Chromium";
            
        } else if (sUsrAg.indexOf("Safari") > -1) {
            sBrowser = "Apple Safari";
            
        } else {
            sBrowser = "unknown";
        }
        let userdata = null
        const pageviewed = window.location.href
    
    
        return {
            pageviewed: pageviewed,
            browser: sBrowser,
            userdata: userdata,
            operatingSystem: operatingSystem,
    
        }
    }
 const apibase='https://geolocation-db.com/json';
    const [ipdata, setipData] = useState({});
    const isBrowser = () => typeof window !== 'undefined';

    let data;
    if (isBrowser()) {
   data= deviceinfo()}
    const [loaded, setloaded] = useState(false)
 
    const getipdata = useCallback(async () => {
      axios.get('https://ipapi.co/json/').then(async (res) => {
        
 
     
        
            setipData(res.data)
          setloaded(true)
          data['userdata']=res.data
   
    await axios.post(endpoints['tracker'] ,data).then((res2) => {
      
        localStorage.setItem('viewid',JSON.stringify(res2.data))


      }
      
      )
    })
 
    },[])
    useEffect(() => {
    getipdata()
 
      
      
    
    },[  getipdata,navpath])
    
     
        
        
        
 
  
return(
<>
 
</>


)


}
 