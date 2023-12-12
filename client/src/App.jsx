import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Budget from './components/Budget';
import StockTracker from './components/StockTracker';
import AboutUs from './components/AboutUs'


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Budget />} />
          <Route path='/StockTracker' element={<StockTracker />} />
          <Route path='/AboutUs' element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App