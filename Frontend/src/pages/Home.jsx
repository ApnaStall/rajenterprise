import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";
import CraftedWith from "../components/CraftedWith.jsx";
import ProductCard from "../components/ProductCard.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import WeHelpYou from "../components/WeHelpYou.jsx";
import CategoryCard from "../components/CategoryCard";
import Testimonials from "../components/Testimonials.jsx";
import { QualityTiles } from '../components/QualityAssurance.jsx';
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
    <div>
        <Navbar />
      </div>
      <div className="mt-30">
        <Carousel />
      </div>
      <div className="mt-30">
        <CraftedWith />
      </div>
      <div>
        <ProductCard />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <WeHelpYou />
      </div>
      <div>
        <CategoryCard />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <QualityTiles />
      </div>
      <div>
        <Footer />
      </div>
      </>
  )
}

export default Home
