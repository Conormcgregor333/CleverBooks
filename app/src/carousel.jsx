import { useState } from "react"
export default function Carousel()
{
    let [curr,setCurr]=useState(0)
    function inc()
    {
        if(curr<3)
            {
                setCurr(curr+1)
            }
            else{
                setCurr(0)
            }
    }
    function dec()
    {
        if(curr>0)
            {
                setCurr(curr-1)
            }
            else{
                setCurr(3)
            }
    }
    let infoArray=[{head:"Deep Domain Expertise",img:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-800.png",p:"Automate your business."},{head:"Focus on key aspects",img:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg",p:"where tech integrations meets business aspects."},{head:"Latest Tech",img:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg",p:"At cleverbooks you get the best results and tech integrations. "},{head:"Purpose Built",img:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg",p:"Best software integration."}]
    return (
        <section className="cars">
            <p className="car-head">Get CleverBooks and get...</p>
           <div className="car-container">
           <img className="left-arrow" onClick={()=>{inc()}} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"/>
       
      
                 <div className="car">
                 <img className="big-img" src={infoArray[curr].img} alt="" />
                 <div>
                     <h1>{infoArray[curr].head}</h1>
                    {/*  <p>{infoArray[curr].p}</p> */}
                 </div>
             </div>
             
      
<img className="right-arrow" onClick={()=>{dec()}} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"/>
           </div>
        </section>
    )

}
