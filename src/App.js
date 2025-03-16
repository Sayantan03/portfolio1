import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./components/Contact";
import "./App.css";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function AppWrapper() {
  const location = useLocation();

  const backgrounds = {
    "/": `${process.env.PUBLIC_URL}/assets/home_bg.jpg`,
    "/projects": `${process.env.PUBLIC_URL}/assets/projects_bg.jpg`,
    "/contact": `${process.env.PUBLIC_URL}/assets/contact_bg.jpg`,
  };

  return (
    <div 
      style={{
        backgroundImage: `url(${backgrounds[location.pathname]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
