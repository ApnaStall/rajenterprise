import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import cu1 from '../assets/cu1.png';

function ContactUs() {
  return (
        <>
        <div>
      <div className="w-full bg-white py-16 px-6 md:px-16 mt-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-5xl font-bold mb-6">Contact Us</h2>

          <p className="text-lg leading-relaxed text-gray-800 mb-8">
            Thank you for considering Rose Garment for your hospital linen needs.
            We are dedicated to providing top-quality products and exceptional
            service to our customers. If you have any questions, need assistance
            with your order, or would like to discuss custom solutions, please feel
            free to contact us. Your satisfaction is our priority, and we look
            forward to serving you with excellence. Reach out to us today – We're
            here to help!
          </p>

          <div className="flex gap-4">
            <a
              href="tel:+919920785167"
              className="px-6 py-2 border-2 border-[#234c54] bg-[#004152] text-white rounded-md font-semibold"
            >
              Call Us
            </a>

            <a
              href="mailto:rosegarment2013@gmail.com"
              className="px-6 py-2 border-2 border-[#234c54] text-[#004152] rounded-md font-semibold"
            >
              Mail Us
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-center">
          <img
            src={ cu1 }
            alt="10 Years Badge"
            className="w-80 md:w-96 object-contain"
          />
        </div>
      </div>

      <div className="my-20"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg text-gray-800 md:ml-30">

        <div className="flex items-center gap-4">
          <div className="bg-[#3B5D50] p-3 rounded-lg text-white">
            <FaMapMarkerAlt size={24} />
          </div>
          <p>
            Mumbra Devi Apt, Shop No. 6,
            A - Wing Near Angel Paradise School, Narayan Nagar,
            Mumbra, Thane - 400612. (MH.)
          </p>
        </div>

        <div className="flex items-center gap-4 md:ml-12">
          <div className="bg-[#3B5D50] p-3 rounded-lg text-white">
            <FaEnvelope size={22} />
          </div>
          <p>rajenterprise@gmail.com</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#3B5D50] p-3 rounded-lg text-white rotate-90">
            <FaPhone size={22} />
          </div>
          <p>+91 0000000000</p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ContactUs
