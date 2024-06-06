
import "./sass/main.scss"
import Navbar from "./navbar";
import ProblemSolved from "./problemSolved";
import KeyMetrics from "./keyMetrics";
import Marquee from "./marquee";
import Review from "./review";
import Footer from "./footer";
import CTA from "./cta";
function App() {
  return (
    <>
      <Navbar />
      <ProblemSolved />
      <KeyMetrics />
      <Marquee />
      <Review />
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
