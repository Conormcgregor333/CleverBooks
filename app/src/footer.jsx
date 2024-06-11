import Scrollup from "./scrollUP"
export default function Footer()
{
    return (
        <section className="footer" id="footer">
            <div className="footer-content">
                <div className="up">
                    <div className="company">
                    <div className="nav1">
                    <p className="logo">CleverBooks</p>
                </div>
                    <p className="ptxt">CleverBooks is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>

                    </div>
                   <div className="info">
                   <div className="explore">
                        <p className="phead">Explore</p>
                        <p>Product</p>
                        <p>Pricing</p>
                        <p>Customer Service</p>
                        <p>Career</p>
                    </div>
                    <div className="learn">
                    <p className="phead">Learn</p>
                    <p>About Us</p>
                    <p>Blog</p>
                    </div>
                    <div className="contact">
                    <p className="phead">Contact</p>
                    <p className="email">clever@cleverbooks.ai</p>
                    <p className="office">Registered Office:
                    </p>
                    <p className="office">1840, Main,</p>
                    <p className="office"> 6th city road,</p>
                    <p className="office"> 19th Main Road,</p>
                    <p className="office"> Bengaluru, India.</p>
                    <p className="corporate-office">Corporate Office:</p>
                    <p className="c-office">TRS Avenue, Bengaluru,</p>
                    <p className="c-office">India. 560102</p>
                    <div className="social">
                    <a className="link" href="" ><div><svg width="20" height="17" viewBox="0 0 20 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M20 1.92708C19.2643 2.2526 18.4733 2.47396 17.6432 2.57161C18.4896 2.0638 19.1406 1.25977 19.4466 0.302734C18.6556 0.771484 17.7767 1.11328 16.8424 1.29883C16.0938 0.501301 15.026 0 13.8477 0C11.582 0 9.74284 1.83919 9.74284 4.10482C9.74284 4.42708 9.77865 4.73958 9.85026 5.03906C6.4388 4.86979 3.41471 3.23568 1.39323 0.751953C1.03841 1.35742 0.836588 2.0638 0.836588 2.81575C0.836588 4.23828 1.55924 5.49479 2.66276 6.23047C1.98893 6.20768 1.35742 6.02539 0.804037 5.71615C0.804037 5.73568 0.804037 5.75195 0.804037 5.76823C0.804037 7.75716 2.2168 9.41732 4.09505 9.79167C3.75 9.88607 3.38867 9.93815 3.01432 9.93815C2.75065 9.93815 2.49023 9.91211 2.24284 9.86328C2.76367 11.4941 4.2806 12.679 6.07422 12.7148C4.67122 13.8151 2.90039 14.4694 0.979817 14.4694C0.647786 14.4694 0.322266 14.4499 0 14.4108C1.81641 15.5762 3.97135 16.2565 6.28906 16.2565C13.8379 16.2565 17.9655 10.0033 17.9655 4.58008C17.9655 4.4043 17.959 4.22526 17.9525 4.04948C18.7533 3.47005 19.4499 2.7474 20 1.92708Z"></path>
</svg></div></a>
<a className="link" href=""><div><svg width="11" height="20" viewBox="0 0 11 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.525 7.00006H7V5.00006C7 3.96806 7.084 3.31806 8.563 3.31806H10.431V0.138063C9.522 0.0440625 8.608 -0.0019375 7.693 6.25e-05C4.98 6.25e-05 3 1.65706 3 4.69906V7.00006H0V11.0001L3 10.9991V20.0001H7V10.9971L10.066 10.9961L10.525 7.00006Z"></path>
</svg></div></a>
<a className="link" href="" ><div ><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M5.80529 0C2.60817 0 0 2.60817 0 5.80529V14.2007C0 17.3918 2.60817 20 5.80529 20H14.2007C17.3918 20 20 17.3918 20 14.1947V5.80529C20 2.60817 17.3918 0 14.1947 0H5.80529ZM5.80529 1.53846H14.1947C16.5625 1.53846 18.4615 3.4375 18.4615 5.80529V14.1947C18.4615 16.5625 16.5625 18.4615 14.2007 18.4615H5.80529C3.4375 18.4615 1.53846 16.5625 1.53846 14.2007V5.80529C1.53846 3.4375 3.4375 1.53846 5.80529 1.53846ZM16.1538 3.07692C15.7272 3.07692 15.3846 3.41947 15.3846 3.84615C15.3846 4.27284 15.7272 4.61538 16.1538 4.61538C16.5805 4.61538 16.9231 4.27284 16.9231 3.84615C16.9231 3.41947 16.5805 3.07692 16.1538 3.07692ZM10 4.61538C7.03726 4.61538 4.61538 7.03726 4.61538 10C4.61538 12.9627 7.03726 15.3846 10 15.3846C12.9627 15.3846 15.3846 12.9627 15.3846 10C15.3846 7.03726 12.9627 4.61538 10 4.61538ZM10 6.15385C12.1334 6.15385 13.8462 7.86659 13.8462 10C13.8462 12.1334 12.1334 13.8462 10 13.8462C7.86659 13.8462 6.15385 12.1334 6.15385 10C6.15385 7.86659 7.86659 6.15385 10 6.15385Z"></path>
</svg></div></a>
<a className="link" href="" ><div ><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4.22008C2 3.57656 2.22523 3.04568 2.67568 2.62741C3.12612 2.20913 3.71172 2 4.43243 2C5.14029 2 5.71299 2.20591 6.15058 2.61776C6.60102 3.04247 6.82625 3.59587 6.82625 4.27799C6.82625 4.89575 6.60747 5.41054 6.16988 5.82239C5.71944 6.2471 5.12741 6.45946 4.39382 6.45946H4.37452C3.66666 6.45946 3.09396 6.2471 2.65637 5.82239C2.21878 5.39768 2 4.86357 2 4.22008ZM2.25097 21.112V8.21622H6.53668V21.112H2.25097ZM8.9112 21.112H13.1969V13.9112C13.1969 13.4607 13.2484 13.1132 13.3514 12.8687C13.5315 12.4311 13.805 12.0611 14.1718 11.7587C14.5386 11.4562 14.9987 11.305 15.5521 11.305C16.9936 11.305 17.7143 12.2767 17.7143 14.2201V21.112H22V13.7181C22 11.8134 21.5496 10.3687 20.6486 9.38417C19.7477 8.39961 18.5573 7.90734 17.0772 7.90734C15.417 7.90734 14.1236 8.62162 13.1969 10.0502V10.0888H13.1776L13.1969 10.0502V8.21622H8.9112C8.93693 8.62805 8.94981 9.90861 8.94981 12.0579C8.94981 14.2072 8.93693 17.2252 8.9112 21.112Z"></path>
</svg></div></a>
                       
                    </div>
                   </div>
                    </div>
                </div>
                <div className="down">
                    <div className="down-txt">
                        <div className="copyright">
                            <p>Copyright 2024 CleverBooks</p>
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                        </div>
                        <p className="con">Cleverbooks Innovations Private Limited</p>
                        <p className="con">CIN: U72900ABDJ5858RNDKDD4</p>
                    </div>
                    <Scrollup/>
                </div>
            </div>
            
        </section>
    )
}