import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import GitHub from "./GitHub/GitHub";
import './Styles/_Core.scss';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <GitHub/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
