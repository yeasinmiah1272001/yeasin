import React from "react";
import Banner from "./Component/Banner";
import UiSection from "./Component/UiSection";
import About from "./Component/About";
import Counter from "./Component/Counter";
import Footer from "./Component/Footer";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Project from "./Component/Project";
import Skill from "./Component/Skill";
import Education from "./Component/Education";
import Design from "./Component/Design/Design";
import Test from "./Component/Test";

const App = () => {
  return (
    <div id="home" className=" font-bodyFont overflow-hidden">
      <Design />
      <Banner />
      <UiSection />
      <About />
      <Counter />
      <Skill />
      <Test />
      <Project />

      <Portfolio />
      <Education />
      {/* <Spoty />
      <Blog /> */}
      <Contact />

      <Footer />
    </div>
  );
};

export default App;
