import "./App.css";

import Home from "./pages/home/home.component";
import NavBar from "./components/sticky-navbar/navBar.component";
import AboutMe from "./pages/about/aboutMe.component";
import Portfolio from "./pages/portfolio/portfolio.component";
import Resume from "./pages/resume/resume.component";
import ContactMe from "./pages/contact-me/contactMe.component";

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <AboutMe title="About" />
      <Portfolio title="Portfolio" />
      <Resume title="Resume" />
      <ContactMe title="Contact" />
    </div>
  );
}

export default App;
