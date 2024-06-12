
import "./sass/main.scss"
import Navbar from "./navbar";
import ProblemSolved from "./problemSolved";
import KeyMetrics from "./keyMetrics";
import Marquee from "./marquee";
import Review from "./review";
import Footer from "./footer";
import CTA from "./cta";
import Carousel from "./carousel";
import ScrollIndicator from "./scrollIndicator";
function App() {
  return (
    <>
    <ScrollIndicator/>
      <Navbar />
      <ProblemSolved />
      <KeyMetrics />
      <Marquee />
      <Review />
      <Carousel/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
