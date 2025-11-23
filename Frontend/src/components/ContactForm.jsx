import React from 'react'

function ContactForm() {
  return (
    <div>
      <>
        <section className="w-full px-6 md:px-20 py-16">

        <form className="max-w-5xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                First name
                </label>
                <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
            </div>

            <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                Last name
                </label>
                <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
            </div>
            </div>

            <div className="mt-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
                Email address
            </label>
            <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            </div>

            <div className="mt-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
                Contact No
            </label>
            <input
                type="text"
                placeholder="+91 **********"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            </div>

            <div className="mt-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
                Message
            </label>
            <textarea
                placeholder="Write Anything"
                rows={6}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
            </div>

            <div className="mt-10">
            <button
                type="submit"
                className="bg-[#003049] text-[#f2a900] font-medium px-10 py-3 rounded-xl shadow-md hover:bg-black hover:text-white transition"
            >
                Send Message
            </button>
            </div>

        </form>
        </section>
      </>
    </div>
  )
}

export default ContactForm
