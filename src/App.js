import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Certificates from './components/Certificates'; // Use uppercase 'Certificates'
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import MobileMessage from './components/MobileMessage'; 

function App() {
  return (
    <div className="App">
      <MobileMessage /> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} /> {/* Use uppercase 'Certificates' */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
