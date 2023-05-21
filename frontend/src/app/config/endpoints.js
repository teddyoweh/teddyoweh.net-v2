"use client"
import { serverip } from "./ip"

const url = (endpoint) =>{
    return `${serverip}/${endpoint}`
}
const endpoints = {
   
    'tracker':url('views/add')
}

export {endpoints}