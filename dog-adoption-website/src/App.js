// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import LandingPage from './pages/LandingPage';
import Gallery from './pages/Gallery';
import Apply from './pages/Apply';
import MyAccount from './pages/MyAccount';

import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/my-account" element={<MyAccount />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
