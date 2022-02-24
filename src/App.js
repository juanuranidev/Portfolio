import About from "./About/About";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import './Styles/_Core.scss';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
