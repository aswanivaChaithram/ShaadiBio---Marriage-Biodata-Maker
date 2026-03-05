import React from 'react'

const Reviews = () => {
  return (
    <div className="px-6 py-4 md:py-18" id='review'>

      {/* Section Header */}
      <div className="text-center mb-18">
        <p className="inline-block px-4 text-orange-600 text-sm font-medium">
          Reviews
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
          What Our Users Say
        </h1>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Review 1 */}
        <div className="border border-orange-600 rounded-xl p-6 flex flex-col gap-4">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-600 text-[rgb(6,40,115)] font-bold text-lg">
              P
            </div>

            <div>
              <h1 className="text-md font-semibold text-black">
                Priya Sharma
              </h1>
              <p className="text-sm text-gray-500">
                Delhi, India
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            "The biodata templates are beautiful and professional. It made creating my matrimonial profile so much easier!"
          </p>

        </div>

        {/* Review 2 */}
        <div className="border border-orange-600 rounded-xl p-6 flex flex-col gap-4">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-600 text-[rgb(6,40,115)] font-bold text-lg">
              R
            </div>

            <div>
              <h1 className="text-md font-semibold text-black">
                Rajesh Kumar
              </h1>
              <p className="text-sm text-gray-500">
                Kerala, India
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            "Excellent service! The templates are customizable and the download process is instant. Highly recommended."
          </p>

        </div>

        {/* Review 3 */}
        <div className="border border-orange-600 rounded-xl p-6 flex flex-col gap-4">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-600 text-[rgb(6,40,115)] font-bold text-lg">
              S
            </div>

            <div>
              <h1 className="text-md font-semibold text-black">
                Sneha Patel
              </h1>
              <p className="text-sm text-gray-500">
                Bangalore, India
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            "User-friendly interface and stunning templates. Perfect for creating professional biodata quickly."
          </p>

        </div>

      </div>

    </div>
  )
}

export default Reviews