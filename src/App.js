import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./components/Contact";
import "./App.css";

function AppWrapper() {
  const location = useLocation();

  // Define background images for each route
  const backgrounds = {
    "/": "/home_bg.jpg",
    "/projects": "/projects_bg.jpg",
    "/contact": "/contact_bg.jpg",
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
