import {useState} from "react";
export default function Feedback()
{
    let [sbmt,setSbmt]=useState(false)
    let [click,setClick]=useState(0)
    let [hover,setHover]=useState(0)
    function handleClick(index)
{
    setClick(index)
}
function handleHover(index)
{
    setHover(index)
}
function handleLeave()
{
   setHover(click)
}

      
    
    return (
        sbmt?<div className="aftersbmt">
            <h3 >Feedback submitted</h3>
            <img style={{display:"block",height:200,width:200,marginInline:"auto",marginTop:40}} src="https://mmrinfotech.in/img/submited.gif" alt="" />
            <p  onClick={()=>{  setSbmt(false)}}>Submit Another?</p>
        </div>:<div className="feedback-container">
            <h3 style={{textAlign:"center",marginTop:20}}>Your thoughts are essential</h3>
            <p>How was the quality of design and implementation ?</p>
            <div className="star-container">
            {
                [...Array(7)].map((_,index)=>{
                    return <div style={index<=(hover || click)?{color:"gold"}:null} onClick={()=>{handleClick(index)}} onMouseOver={()=>{handleHover(index)}} onMouseLeave={()=>{handleLeave()}} className="star">★</div>
                })
            }
            </div>
            <p>Any thing that we should improve upon?</p>
            <textarea placeholder="Any thing we should work on...." name="" id="" rows="10" cols="25"></textarea>
            <button className="feedback-btn" onClick={()=>{  setSbmt(true)}}>Send Feedback</button>
        </div>
    )
}