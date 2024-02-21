import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import Banner from './components/carousel';
import Popular_Products from './components/popular_products';
import Carousel_Indicators from './components/carousel-ndicators';
import AllCards from './components/allCards';
import AllNewCards from './components/allNewCards';
import Coupon from './components/coupon';
import Img from './components/img';
import Footbar from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Popular_Products />
      <AllCards />
      <AllNewCards />
      <Coupon />
      <Img />
      <Footbar />
    </Router>
  );
}

export default App;
