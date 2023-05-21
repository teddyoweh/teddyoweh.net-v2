"use client"
import { serverip } from "./ip"

const url = (endpoint) =>{
    return `${serverip}/${endpoint}`
}
const endpoints = {
    'makepayment': url('payment/add'),
    'tracker':url('views/add')
}

export {endpoints}