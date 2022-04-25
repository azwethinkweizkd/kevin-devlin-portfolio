import "./App.css";

import Home from "./pages/home/home.component";
import NavBar from "./components/sticky-navbar/navBar.component";
import AboutMe from "./pages/about/aboutMe.component";
import Resume from "./pages/resume/resume.component";

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <AboutMe title="About" />
      <Resume />
    </div>
  );
}

export default App;
