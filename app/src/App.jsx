
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
import Feedback from "./feedback";
import Projects from "./projects";
import Team from "./ourteam";
function App() {
  return (
    <>
    <ScrollIndicator/>
      <Navbar />
      <Projects/>
      <ProblemSolved />
      <KeyMetrics />
      <Marquee />
      <Review />
      <Carousel/>
      <Feedback/>
      <Team/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
