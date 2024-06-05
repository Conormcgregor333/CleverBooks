import { useState } from "react";
export default function Review() {
  let [index, setIndex] = useState(0);
  let info = [
    {
      para: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
      profilePic:
        "https://th.bing.com/th/id/OIP.GGvuLqW88OYEXc6VnrWqYgHaGB?rs=1&pid=ImgDetMain",
      name: "Diksha Pande",
      desig: "Co-founder,Samosa Party",
      logo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958d1b6be6bd4e44c51_sylvi.svg",
      mainimg:
        "https://th.bing.com/th/id/R.ba1b7a3c0385fbe09d7208f9fb01429b?rik=kvUcJSZTRE5P8w&riu=http%3a%2f%2f4.bp.blogspot.com%2f-4mCPKisEWrw%2fT5qV3zXjpVI%2fAAAAAAAAPtQ%2fNGDakBUjaqM%2fs1600%2fIMG_1475.JPG&ehk=SJIIObsGPwpvN72AX5EPNilUuO1r3fNg4H4kndyYhcw%3d&risl=&pid=ImgRaw&r=0",
      div1: "upto 95%",
      div1p: "Demand Fulfilment",
      div2: "< 3%",
      div2p: "Daily Stock-out",
    },
    {
      para: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
      profilePic:
        "https://bloggingrepublic.com/wp-content/uploads/2014/12/PowerWomen-Entrepreneurship-.jpg",
      name: "Kirti Goel",
      desig: "Co-founder, P-TAL",
      logo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg",
      mainimg:
        "https://cdn11.bigcommerce.com/s-r75dscg/images/stencil/1280x1280/products/21133/44267/all-brass-handbell-with-high-polish-finish-measures-4-and-3-quarter-inches-handcrafted-in-germany-10303__17857.1559669264.jpg?c=2",
      div1: "Automated Invoice",
      div1p: "Improved Transactions",
      div2: "Channel wise Sales",
      div2p: "Efficient Delivery",
    },
  ];
  function right() {
    if (index < 2) {
      if (index == 1) {
        setIndex(0);
      } else {
        setIndex(1);
      }
    }
    console.log(index);
  }
  function left() {
    if (index > -1) {
      if (index == 0) {
        setIndex(1);
      } else {
        setIndex(0);
      }
    }
    console.log(index);
  }
  return (
    <div className="review">
      <div className="review-container">
        <div className="main-txt">
          <p className="para">{info[index].para}</p>
          <div className="profileANDlogo">
            <div className="profile-info">
              <img
                className="profile-pic"
                src={info[index].profilePic}
                alt=""
              />
              <div className="profile-txt">
                <p className="name">{info[index].name}</p>
                <p className="desig">{info[index].desig}</p>
              </div>
            </div>
            <img className="logo" src={info[index].logo} alt="" />
          </div>
          <div className="btns">
            <img
              onClick={() => {
                left();
              }}
              className="left"
              src="https://www.svgrepo.com/show/94045/back.svg"
              alt=""
            />
            <img
              onClick={() => {
                right();
              }}
              className="right"
              src="https://www.svgrepo.com/show/166617/right-arrow.svg"
              alt=""
            />
          </div>

          <div className="tabs">
            <div>
              <p className="tab-head"> {info[index].div1}</p>
              <p className="des">{info[index].div1p}</p>
            </div>
            <div>
              <p className="tab-head">{info[index].div2}</p>
              <p className="des">{info[index].div2p}</p>
            </div>
          </div>
        </div>
      </div>
      <img className="main-img" src={info[index].mainimg} alt="" />
    </div>
  );
}
