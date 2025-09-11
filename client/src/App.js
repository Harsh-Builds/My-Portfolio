import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./portfolio.css";

function App() {
  return (
    <div className="main">
        <Header />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
 

   
  );
}

export default App;
