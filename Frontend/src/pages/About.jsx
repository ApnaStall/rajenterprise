import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function About() {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
      <AboutUs />
    </div>
    <div>
      <WhyChooseUs />
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

export default About
