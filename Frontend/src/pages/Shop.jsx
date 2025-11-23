import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Products from '../components/Products.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Footer from '../components/Footer.jsx';

function Shop() {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
      <Products />
    </div>
    <div className="items-center mt-10">
        <ProductCard />
    </div>
    <div>
        <Footer />
    </div>
    </>
  )
}

export default Shop
