import React from "react";

const Template1 = () => {
  return (
    <div className="w-[800px] min-h-[1100px] border-4 border-orange-400 p-8 bg-gray-100">

      {/* Title */}
      <h2 className="text-center text-lg font-semibold tracking-wide mb-6">
        BIODATA
      </h2>

      {/* Top Section */}
      <div className="flex gap-6 items-start mb-8">

        {/* Profile Image */}
        <div className="w-32 h-36 bg-gray-300 flex items-center justify-center">
          <span className="text-xs text-gray-600">Profile Image</span>
        </div>

        {/* Name + basic info */}
        <div>
          <h1 className="text-3xl font-bold text-orange-500 mb-3">
            Saurabh Kumar Singh
          </h1>

          <p className="mb-1">
            <span className="font-semibold">Date of Birth:</span> 04/05/1997
          </p>

          <p>
            <span className="font-semibold">Place of Birth:</span> Delhi, India
          </p>
        </div>
      </div>

      {/* Personal Details */}
      <div className="mb-8">
        <h3 className="font-bold underline mb-4">PERSONAL DETAILS</h3>

        <div className="grid grid-cols-2 gap-y-2 text-sm">

          <p>Name:</p>
          <p>Saurabh Kumar Singh</p>

          <p>Date of Birth:</p>
          <p>04/05/1997</p>

          <p>Place of Birth:</p>
          <p>Delhi, India</p>

          <p>Height:</p>
          <p>5 feet 9 inches</p>

          <p>Caste:</p>
          <p>Brahmin</p>

          <p>Gotra:</p>
          <p>Mittal</p>

          <p>Education:</p>
          <p>
            MD from Amity University <br />
            BSc from Galgotias University
          </p>

          <p>Job:</p>
          <p>Marketing Manager - Zomato</p>

          <p>Languages:</p>
          <p>Hindi, English</p>

          <p>Hobby:</p>
          <p>Photography, Politics, Fitness</p>

        </div>
      </div>

      {/* Family Details */}
      <div className="mb-8">
        <h3 className="font-bold underline mb-4">FAMILY DETAILS</h3>

        <div className="grid grid-cols-2 gap-y-2 text-sm">

          <p>Grandfather’s Name:</p>
          <p>Dr. SD Kumar Singh</p>

          <p>Grandfather’s Occupation:</p>
          <p>Retired Maths Professor - IIT BHU</p>

          <p>Father’s Name:</p>
          <p>Sh. Deepak Kumar Singh</p>

          <p>Father’s Occupation:</p>
          <p>Business - Children Clothing Store in New Delhi</p>

          <p>Mother’s Name:</p>
          <p>Smt. Madhu Kumar Singh</p>

          <p>Mother’s Occupation:</p>
          <p>Homemaker</p>

          <p>Uncle’s Name:</p>
          <p>Sh. Shubham Singh</p>

          <p>Uncle’s Occupation:</p>
          <p>Senior Manager Software Development</p>

          <p>Younger Brother’s Name:</p>
          <p>Abhinav Singh</p>

          <p>Younger Brother’s Occupation:</p>
          <p>Embedded Software Engineer</p>

        </div>
      </div>

      {/* Contact Details */}
      <div>
        <h3 className="font-bold underline mb-4">CONTACT DETAILS</h3>

        <div className="grid grid-cols-2 gap-y-2 text-sm">

          <p>Contact Person:</p>
          <p>Sh. Deepak Kumar Singh</p>

          <p>Contact Number:</p>
          <p>(1) 222-222-2222</p>

          <p>Email:</p>
          <p>deepak.kumar@mail.com</p>

        </div>
      </div>

    </div>
  );
};

export default Template1;