import About from "./About/About";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
