import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Skills from "./Sections/Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Sections/Contact/Contact";
import GitHub from "./Sections/GitHub/GitHub";
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
