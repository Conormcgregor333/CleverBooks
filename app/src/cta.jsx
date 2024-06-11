export default function CTA()
{
    function login()
    {
         let x=document.getElementById("cta-form")
         x.style.display="block"
    }
    function cut()
    {
        let x=document.getElementById("cta-form")
        x.style.display="none"

    }
    return (
       <section className="cta-section" id="cta">
         <div className="cta">
            <p className="cta-head">You can grow faster than you think!</p>
            <p className="cta-p">Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.</p>
            <p className="cta-button" onClick={()=>{login()}}>Get started with CleverBooks</p>
           
        </div>
        <div className="cta-form" id="cta-form">
            <p id="cut"  onClick={()=>{cut()}}>X</p>
            <p className="form-head">Getting started with CleverBooks</p>
            <p className="txt-below-head">Take a free tour of our platform</p>
           
           <p className="lab"> <label htmlFor="">First Name*</label></p>
           <p className="inp"> <input type="text" /></p>
           <p className="lab"> <label htmlFor="">Last Name*</label></p>
           <p className="inp"> <input type="text" /></p>
           <p className="lab"> <label htmlFor="">Working Email*</label></p>
          <p className="inp">  <input type="text" /></p>
           <p className="lab"> <label htmlFor="">Phone Number*</label></p>
           <p className="inp"> <input type="text" /></p>
           <p className="lab"> <label htmlFor="">Company Name*</label></p>
            <p className="inp"><input type="text" /></p>
            <p><button className="submit">Submit</button></p>
            <p className="last">Already have an account?<span className="login-now"> Log In</span>
            </p>
        </div>
       </section>
    )
}