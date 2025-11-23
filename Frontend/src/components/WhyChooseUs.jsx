import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import h1 from "../assets/h1.png";

export function WhyChooseUsTiles() {
  const items = [
    {
      icon: <FaShippingFast size={32} className="text-[#003049]" />,
      title: "Fast & Free Shipping",
      desc: "Enjoy lightning-fast delivery with our complimentary shipping service, ensuring your order reaches you promptly and hassle-free.",
    },
    {
      icon: <MdOutlineShoppingBag size={32} className="text-[#003049]" />,
      title: "Easy to Shop",
      desc: "Shop effortlessly with our user-friendly platform, offering a seamless browsing experience and hassle-free checkout.",
    },
    {
      icon: <AiOutlineCustomerService size={32} className="text-[#003049]" />,
      title: "24/7 Support",
      desc: "We're here for you anytime. Need help? Reach out day or night, and we'll assist you right away.",
    },
    {
      icon: <IoTimeOutline size={32} className="text-[#003049]" />,
      title: "36 hours*",
      desc: "All O.T. Cloth Item Will Be Delivered Within 36 Hours*.",
    },
  ];

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              {item.icon}
            </div>
          </div>
          <h3 className="font-semibold text-lg text-[#003049]">{item.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default function WhyChooseUs() {
  return (
    <>
    <section className="w-full py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#003049]">
            Why Choose Us
          </h2>

          <p className="text-gray-700 mt-3 mb-10">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
            Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <WhyChooseUsTiles />
        </div>

        <div className="relative flex justify-center">
          <div className="absolute ml-18 -top-6 -left-6 grid grid-cols-6 gap-7 opacity-70 z-0">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#f2a900] rounded-full"></div>
            ))}
          </div>

          <img
            src={h1}
            alt="Why Choose Us"
            className="rounded-3xl shadow-lg w-full max-w-md ml-20 z-10"
          />
        </div>

      </div>
    </section>
    </>
  );
}
