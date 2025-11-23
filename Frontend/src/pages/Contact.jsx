import React from 'react'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs'
import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
      <ContactUs />
    </div>
    <div>
      <ContactForm />
    </div>
    <div>
      <MapEmbed />
    </div>
    <div>
      <Footer />
    </div>
    </>
  )
}

export default Contact
