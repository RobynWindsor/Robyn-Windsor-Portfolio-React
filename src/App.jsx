import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Home.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/about" element={<About />} exact></Route>
        <Route path="/projects" element={<Projects />} exact></Route>
        <Route path="/contact" element={<Contact />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
