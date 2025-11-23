import React from 'react'
import Navbar from '../components/Navbar'
import TopDesign from '../components/TopDesign'
import { WhyChooseUsTiles } from '../components/WhyChooseUs'
import CraftedWith from '../components/CraftedWith'
import ProductCard from '../components/ProductCard'
import ClientsSection from '../components/ClientsSection'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Services() {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
        <TopDesign />
    </div>
    <div className="m-20">
        <WhyChooseUsTiles />
    </div>
    <div>
        <CraftedWith />
    </div>
    <div>
        <ProductCard />
    </div>
    <div>
        <ClientsSection />
    </div>
    <div>
        <Testimonials />
    </div>
    <div>
        <Footer />
    </div>
    </>
  )
}

export default Services
