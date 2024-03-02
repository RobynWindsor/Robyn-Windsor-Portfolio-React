import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
