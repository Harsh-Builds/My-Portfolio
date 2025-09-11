import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import "./portfolio.css";

function App() {
  return (
    <div className="main">
        <Header />
        <Home />
        <About />
        <Skills />
        <Qualification />
    </div>
 

   
  );
}

export default App;
