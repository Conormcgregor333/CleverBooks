import "./sass/main.css";
import { useState } from "react";
export default function Navbar() {
  let [bool, setBool] = useState(false);
  function addAnim() {
    let hamburger = document.getElementById("hamburger");
    let hamexpand = document.getElementById("hamexpand");
    if (bool) {
      hamburger.classList.add("makeCross");
      hamexpand.style.display = "block";
    } else {
      hamburger.classList.remove("makeCross");
      hamexpand.style.display = "none";
    }
  }

  function products() {
    let show = document.getElementById("Showproduct");
    let list = document.getElementById("productsList");
    show.addEventListener("mouseenter", () => {
      list.style.display = "block";
    });
    show.addEventListener("mouseleave", () => {
      list.style.display = "none";
    });
    list.addEventListener("mouseenter", () => {
      list.style.display = "block";
    });
    list.addEventListener("mouseleave", () => {
      list.style.display = "none";
    });
    window.addEventListener("scroll", () => {
      let nav = document.getElementById("nav");
      nav.style.opacity = "0.7";
    });
  }
  function industry() {
    let showindustries = document.getElementById("ShowIndustry");
    let industries = document.getElementById("industries");
    showindustries.addEventListener("mouseenter", () => {
      industries.style.display = "block";
    });
    showindustries.addEventListener("mouseleave", () => {
      industries.style.display = "none";
    });
    industries.addEventListener("mouseenter", () => {
      industries.style.display = "block";
    });
    industries.addEventListener("mouseleave", () => {
      industries.style.display = "none";
    });
  }
  function pricing()
  {
    let showindustries = document.getElementById("ShowPricing");
    let industries = document.getElementById("pricing");
    showindustries.addEventListener("mouseenter", () => {
      industries.style.display = "block";
    });
    showindustries.addEventListener("mouseleave", () => {
      industries.style.display = "none";
    });
    industries.addEventListener("mouseenter", () => {
      industries.style.display = "block";
    });
    industries.addEventListener("mouseleave", () => {
      industries.style.display = "none";
    });
  }
  function login()
  {
   /*  let showindustries = document.getElementById("login"); */
    let login = document.getElementById("loginclever");
    login.style.display="block";
    
  }
  function crosscut(){
    let login = document.getElementById("loginclever");
    login.style.display="none";
  }
  /* --------------------------------------------------------------------------------------------------------------- */

  return (
    <div className="navouter">
      <div className="nav" id="nav">
        <div className="nav1">
          <p className="logo">CleverBooks</p>
        </div>
        <div className="nav2">
          <div
            className="Showproduct"
            id="Showproduct"
            onMouseOver={() => {
              products();
            }}
          >
            Product
          </div>
          <div 
           id="ShowPricing"
           onMouseOver={() => {
             pricing();
           }} 
          >Pricing</div>
          <div
            id="ShowIndustry"
            onMouseOver={() => {
              industry();
            }}
          >
            Industry
          </div>
         <div> <a className="customer" href="#customer-stories" style={{textDecoration:"none",color:"white"}} alt="">Customer Stories</a></div>
          <div><a className="customer" href="#footer" style={{textDecoration:"none",color:"white"}} alt="">About</a>
          </div>
          
        </div>
        <div className="nav3">
          <div className="login" id="login" onClick={()=>{login()}}>
            Login
          </div>
          <div className="talk"><a style={{textDecoration:"none",color:"white"}} href="#cta">Talk to us</a></div>
        </div>
        <div
          onClick={() => {
            setBool(!bool);
            addAnim();
          }}
          id="hamburger"
          className="hamburger"
        >
          <div className="ham1"></div>
          <div className="ham2"></div>
          <div className="ham3"></div>
        </div>
      </div>
      <div id="hamexpand" className="hamexpand">
        <div>Product</div>
        <div>Pricing</div>
        <div>Industry</div>
        <div>Customer Stories</div>
        <div>About</div>
        <div>Blog</div>
        <div>
          <a className="log" href="">
            Login
          </a>
        </div>
        <div className="talkTo">Talk to us</div>
      </div>
      <div className="product" id="productsList">
        <div className="producthead">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d1404ea3edc_Stock.svg"
            alt=""
          />
          <p>Product Home</p>
        </div>
        <p className="linebreak"></p>
        <div className="productnames">
          <div className="productname">
            <div>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/63ff51f402d807110ce327e3_HELIX%20SVG%20ICON.svg"
                alt=""
              />
              <h3>Helix :Workflow Automation</h3>
            </div>
            <p>Build & automate custom S&OPs.</p>
          </div>
          <div className="productname">
            <div>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d1743ea3e92_Demand%20Forcasting.svg"
                alt=""
              />
              <h3>Accurate Demand Forecasting</h3>
            </div>
            <p>Dynamically predict future demands with unmatched accuracy.</p>
          </div>
          <div className="productname">
            <div>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d76a9ea3e90_Purchase%20Planning.svg"
                alt=""
              />
              <h3>Automated Purchase Planning</h3>
            </div>
            <p>Automate your purchase order .</p>
          </div>
          <div className="productname">
            <div>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326de50dea3e93_Distribution%20Planning.svg"
                alt=""
              />
              <h3>Automated Distribution Planning</h3>
            </div>
            <p>Automate the distribution planning for your business.</p>
          </div>
          <div className="productname">
            <div>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326da925ea3e91_Integrations.svg"
                alt=""
              />
              <h3>Integration</h3>
            </div>
            <p>
              At CleverBooks we provide seemless integration of technology with
              business.
            </p>
          </div>
          <div className="productname">
            <div>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643680ae1721eb351d815937_dashboard%20icon%20.svg"
                alt=""
              />
              <h3>Custom Dashboard</h3>
            </div>
            <p>Increasing user accessability with custom dashboard .</p>
          </div>
          <div className="productname">
            <div>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/662a4722c49c3b0e91bbc19b_consensus.svg"
                alt=""
              />
              <h3>
                Consensus Planning <span className="new">New</span>
              </h3>
            </div>
            <p>Collaborate and take better decisions faster.</p>
          </div>
        </div>
      </div>
      <div className="industries" id="industries">
        <div className="industry">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg"
            alt=""
          />
          <p>Beauty and Personal Care</p>
        </div>
        <div className="industry">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0c913aa58280f16babf9_dsfsa.svg"
            alt=""
          />
          <p>Quick Service Restaurants</p>
        </div>
        <div className="industry">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0cb76f758e3b86ff173b_Group%202649.svg"
            alt=""
          />
          <p>Food and Beverages</p>
        </div>
        <div className="industry">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0cd33aa58280f16bebe5_dfsa.svg"
            alt=""
          />
          <p>Apparel and Accessories</p>
        </div>
        <div className="industry">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65d452b762741ee2943718b2_pharma%20icon%202.svg"
            alt=""
          />
          <p>Pharmaceuticals</p>
        </div>
      </div>
      <div className="pricing" id="pricing" >
          <div className="price-head">
           
              <p className="flexible">Flexible Pricing Plan</p>
              <p className="satisfy">Pay only when satisfied</p>
            <img src="https://thumbs.dreamstime.com/b/verified-stamp-round-grunge-sign-label-181774320.jpg" alt="" />
          </div>
          <div className="billed">
            <p>Billed Monthly |</p>
            <p>Billed Annually |</p>
            <p className="save">Save upto 20%</p>
          </div>
          <div className="prices">
            <div>
              <p className="free">Free</p>
              <p className="dollar">0$<span>/month</span></p>
              <p className="price-txt">A good plan if you are just starting and learning the technology.</p>
              <button>Get Started</button>
              <p className="line"></p>
              <h4>Whats Included</h4>
              <p className="points">✅ Basic task and project management</p>
              <p  className="points">✅ Responsiveness</p>
              <p  className="points">✅ After services</p>
            </div>
            <div>
              <p className="free">Basic</p>
              <p className="dollar">10$<span>/month</span></p>
              <p className="price-txt">Good deal if you are looking for something intermediate and robust.</p>
              <button>Get Started</button>
              <p className="line"></p>
              <h4>Whats Included</h4>
              <p  className="points">✅ Complete task and project management</p>
              <p  className="points">✅ Responsiveness</p>
              <p  className="points">✅ After services</p>
            </div>
            <div>
              <p className="free">Pro</p>
              <p className="dollar">20$<span>/month</span></p>
              <p className="price-txt">The best pro deal of the year , provides with the best tech integration.</p>
              <button>Get Started</button>
              <p className="line"></p>
              <h4>Whats Included</h4>
              <p  className="points">✅ Priority Customer support</p>
              <p  className="points">✅ Full year management</p>
              <p  className="points">✅ Exclusive designs</p>
            </div>
          </div>
        </div>
        <div className="loginclever" id="loginclever">
          <p id="crosscut" onClick={()=>{crosscut()}}>X</p>
          <p>Login to awesomeness</p>
          <label htmlFor="name">Username</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button>Login</button>
          <p className="newhere">New here ? <span>SignUp</span></p>
        </div>
      <div className="hero-section">
        <div className="hero">
          <p className="title">
            Every order fulfilled, <span>on time.</span>
          </p>
          <p className="about">
            Eliminate overstocking and under-stocking with Crest. Built by
            supply-chain experts, it brings the same technology used by large
            global brands to power fast-growing startups. In short, we make
            supply meet demand, and then help you grow both.
          </p>
          <div className="btn-img">
            <div className="outer">
              <p>Get started with CleverBooks</p>
              <div className="inner">
                <div className="txt-cont">
                  <p className="txt">Get started with CleverBooks</p>
                </div>
              </div>
            </div>
            <img
              className="txt-img"
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg"
              alt=""
            />
          </div>
        </div>
        <img
          className="hero-img"
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg"
          alt=""
        />
      </div>
    </div>
  );
}
