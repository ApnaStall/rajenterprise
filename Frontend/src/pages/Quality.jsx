import React from 'react'
import Navbar from '../components/Navbar'
import TopDesign from '../components/TopDesign'
import QualityAssurance from '../components/QualityAssurance'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Quality() {
  return (
    <>
    <div>
        <Navbar />
    </div>
    <div>
      <TopDesign />
    </div>
    <div>
      <QualityAssurance />
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

export default Quality
