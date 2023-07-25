import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
