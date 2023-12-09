import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <ScrollToTop />
      <Routes>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
        <Route path="/projects" element={<Projects />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
