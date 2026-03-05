import React from 'react'

const About = () => {
  return (
    <div className="md:py-20 py-2 px-6">

      <div className="text-center mb-14">
        <p className="inline-block px-4 text-orange-600 text-sm font-medium">
          About Us
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
          Our Biodata Maker Features
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        <div className="border border-orange-600 p-8 rounded-xl text-center flex flex-col items-center gap-4">
          <div className="bg-orange-600 p-4 rounded-full">
            <i className="fa-solid fa-shield text-[rgb(6,40,115)] text-xl"></i>
          </div>
          <h2 className="text-xl font-semibold">
            Privacy Focused
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            We respect your privacy — your data stays on your device and is never uploaded to our servers.
          </p>
        </div>

        <div className="border border-orange-600 p-8 rounded-xl text-center flex flex-col items-center gap-4">
          <div className="bg-orange-500 p-4 rounded-full">
            <i className="fa-solid fa-eye text-[rgb(6,40,115)] text-xl"></i>
          </div>
          <h2 className="text-xl font-semibold">
            Live Biodata Preview
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Edit and see updates live as you type, with no need to save or reload.
          </p>
        </div>

        <div className="border border-orange-600 p-8 rounded-xl text-center flex flex-col items-center gap-4">
          <div className="bg-orange-500 p-4 rounded-full">
            <i className="fa-solid fa-language text-[rgb(6,40,115)] text-xl"></i>
          </div>
          <h2 className="text-xl font-semibold">
            Multi-Language Biodata Format
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Create biodata in English, Hindi, Malayalam, Telugu, Tamil or Kannada. Switch languages in real-time.
          </p>
        </div>

        <div className="border border-orange-600 p-8 rounded-xl text-center flex flex-col items-center gap-4">
          <div className="bg-orange-500 p-4 rounded-full">
            <i className="fa-solid fa-download text-[rgb(6,40,115)] text-xl"></i>
          </div>
          <h2 className="text-xl font-semibold">
            Instant PDF Download
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Get high-quality PDF files instantly. Share your marriage biodata via WhatsApp, Email, or print a copy.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About