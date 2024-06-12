import { useState } from "react";
export default function ScrollIndicator()
{
    let [len,setLen]=useState(0)
    window.addEventListener("scroll",()=>{
        let a=document.documentElement.scrollTop;
        let b=document.documentElement.scrollHeight;
        let c=document.documentElement.clientHeight;
        let x=a*100/(b-c)
        setLen(x)
    })
   return  <div style={{width:`${len}%`,height:10,backgroundColor:"rgb(255, 169, 255)",position:"fixed",top:0,zIndex:1000000000000}}></div>;
} 