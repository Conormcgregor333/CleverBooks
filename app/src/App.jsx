import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./navbar";
import ProblemSolved from "./problemSolved";
import KeyMetrics from "./keyMetrics";
import Marquee from "./marquee";
import Review from "./review";
function App() {
  return (
    <>
      <Navbar />
      <ProblemSolved />
      <KeyMetrics />
      <Marquee />
      <Review />
    </>
  );
}

export default App;
