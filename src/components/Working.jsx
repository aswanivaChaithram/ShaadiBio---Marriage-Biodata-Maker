import React from 'react'

const Working = () => {
  return (
    <div className="md:py-2 py-18 px-6" id='work'>

      <div className="text-center mb-10">
        <p className="inline-block px-4 text-orange-600 text-sm font-medium">
          How It Works
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
          Create your Perfect Marriage Biodata in Just 3 Easy Steps
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="shadow-lg rounded-xl p-8 text-center flex flex-col items-center gap-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-600 text-[rgb(6,40,115)] text-xl font-bold">
            1
          </div>
          <h2 className="text-xl font-semibold text-black">
            Enter your information
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Simply add your personal, family and contact details. You can also add a profile photo for your biodata.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-8 text-center flex flex-col items-center gap-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-600 text-[rgb(6,40,115)] text-xl font-bold">
            2
          </div>
          <h2 className="text-xl font-semibold text-black">
            Choose the template
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Create biodata with our wide variety of well-designed templates. Just select the template and we will do the rest.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-8 text-center flex flex-col items-center gap-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-600 text-[rgb(6,40,115)] text-xl font-bold">
            3
          </div>
          <h2 className="text-xl font-semibold text-black">
            Download the PDF
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Everything is done now, you will get beautiful biodata in the PDF format ready to download and share.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Working