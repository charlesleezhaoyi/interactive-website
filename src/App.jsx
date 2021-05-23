import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
//import Works from "./components/works/Works";
import Skills from "../src/components/skills/Skills"
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
    <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <div className = "sections">
        <Intro/>
        <Portfolio/>
        {/*<Works/>*/}
        <Skills/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
