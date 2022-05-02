import "./App.css";

import Home from "./pages/home/home.component";
import MobileNav from "./components/mobile-nav/mobileNav.component";
import NavBar from "./components/sticky-navbar/navBar.component";
import AboutMe from "./pages/about/aboutMe.component";
import Portfolio from "./pages/portfolio/portfolio.component";
import Resume from "./pages/resume/resume.component";
import Contact from "./pages/contact-me/contactMe.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <div className="main-sections-div">
        <div className="mobile-nav-div">
          <MobileNav />
        </div>
        <div className="main-sections">
          <AboutMe title="About" />
          <Portfolio title="Portfolio" />
          <Resume title="Resume" />
          <Contact title="Contact" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
