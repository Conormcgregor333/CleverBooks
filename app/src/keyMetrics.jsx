import { useState } from "react";
export default function KeyMetrics() {
  let [curr, setCurr] = useState(0);
  let cnt = null;
  let k = null;
  let txtArray = [
    "Reduction in out-of-stock",
    "Reduction in cash recovery time",
    "Growth in Revenue",
  ];
  let imgArray = [
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d8009ea3ec5_Avoid%20stockouts-icon.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d16ecea3ef7_reduced-icon.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d83fbea3ef8_Impact-icon.svg",
  ];
  let signArray = ["%", "Days", "%"];
  function count1() {
    cnt += 1;
    console.log(cnt);
    let counter = document.getElementById("display");
    counter.innerText = cnt;
    if (cnt > 84) {
      clearInterval(k);
    }
  }
  function count2() {
    cnt += 1;
    console.log(cnt);
    let counter = document.getElementById("display");
    counter.innerText = cnt;
    if (cnt > 24) {
      clearInterval(k);
    }
  }
  function count3() {
    cnt += 1;
    console.log(cnt);
    let counter = document.getElementById("display");
    counter.innerText = cnt;
    if (cnt > 14) {
      clearInterval(k);
    }
  }
  function txt1() {
    let slider = document.getElementById("slide");
    slider.value = 0;
    setCurr(0);
    cnt = 0;
    k = setInterval(count1, 15);
  }
  function txt2() {
    let slider = document.getElementById("slide");
    slider.value = 1;
    setCurr(1);
    cnt = 0;
    k = setInterval(count2, 50);
  }
  function txt3() {
    let slider = document.getElementById("slide");
    slider.value = 2;
    setCurr(2);
    cnt = 0;
    k = setInterval(count3, 50);
  }
  function prnt(e) {
    let x = e.target.value;
    console.log(x);
    setCurr(x);
    if (x == 0) {
      cnt = 0;
      k = setInterval(count1, 15);
    } else if (x == 1) {
      cnt = 0;
      k = setInterval(count2, 50);
    } else {
      cnt = 0;
      k = setInterval(count3, 50);
    }
  }

  return (
    <section className="keyMetrics">
      <div className="stock-container">
        <div>
          <input
            className="slider"
            id="slide"
            type="range"
            min={0}
            max={2}
            step={1}
            onChange={(e) => {
              prnt(e);
            }}
          />
          <img className="dotimg" src={imgArray[curr]} alt="" />
        </div>
        <div className="range-btn">
          <p
            className="p"
            onClick={() => {
              txt1();
            }} 
          >
            Stock Outs
          </p>
          <p
            className="p"
            onClick={() => {
              txt2();
            }} 
          >
            Cash Recovery Cycle
          </p>
          <p
            className="p"
            onClick={() => {
              txt3();
            }}
          >
            Revenue
          </p>
        </div>
      </div>

      <div className="display-container">
        <div className="display" id="display">
          85
        </div>
        <div className="span">{signArray[curr]}</div>
      </div>

      <p className="display-descp">{txtArray[curr]}</p>
    </section>
  );
}
