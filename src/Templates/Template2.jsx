import React from "react";

const Template2 = () => {
  return (
    <div className="w-[800px] min-h-[1100px] bg-white shadow-xl">

      {/* Top Header */}
      <div className="bg-[#dcc8cf] px-10 py-10 flex items-center gap-10">

        {/* Profile Image Placeholder */}
        <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-xs text-gray-600 text-center">
            Profile <br /> Image
          </span>
        </div>

        {/* Name and Basic Info */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Mahima Jain Aggarwal
          </h1>

          <p className="text-gray-700">
            <span className="font-medium">Date of Birth :</span> 03 November 1995
          </p>

          <p className="text-gray-700">
            <span className="font-medium">Place of Birth :</span> New Delhi
          </p>
        </div>

      </div>

      {/* Content Area */}
      <div className="px-16 py-10">

        {/* PERSONAL DETAILS */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#d8c4cb] px-6 py-2 rounded-full font-semibold text-gray-800">
            PERSONAL DETAILS
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-3 text-gray-800 mb-10">

          <p>Date of Birth</p>
          <p>20 November 1994</p>

          <p>Time of Birth</p>
          <p>7:20 PM</p>

          <p>Place of Birth</p>
          <p>New Delhi</p>

          <p>Rashi</p>
          <p>Tula (Libra)</p>

          <p>Nakshatra</p>
          <p>Aswini</p>

          <p>Complexion</p>
          <p>Fair</p>

          <p>Height</p>
          <p>5 feet 9 inches</p>

          <p>Gotra</p>
          <p>Singh</p>

          <p>Bachelors</p>
          <p>Delhi University, 2018 (B.COM Hons)</p>

          <p>Work</p>
          <p>Senior Consultant, KPMG</p>

        </div>

        {/* FAMILY DETAILS */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#d8c4cb] px-6 py-2 rounded-full font-semibold text-gray-800">
            FAMILY DETAILS
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-3 text-gray-800">

          <p>Father's Name</p>
          <p>Sh. Deepak Gupta</p>

          <p>Father's Occupation</p>
          <p>Business (Steel Trading)</p>

          <p>Mother's Name</p>
          <p>Smt. Madhu Gupta</p>

          <p>Mother's Occupation</p>
          <p>Homemaker</p>

          <p>Siblings</p>
          <p>1 Brother (Unmarried)</p>

        </div>

      </div>

    </div>
  );
};

export default Template2;