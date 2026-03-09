import React from "react";

const Template3 = () => {
  return (
    <div className="w-[800px] min-h-[1100px] bg-white border-2 border-pink-400 p-10">

      {/* Top Title */}
      <h1 className="text-center text-3xl font-serif mb-8">
        BIODATA
      </h1>

      {/* PERSONAL DETAILS */}
      <div className="mb-8">

        <div className="bg-pink-500 text-white px-6 py-2 inline-block font-semibold">
          PERSONAL DETAILS
        </div>

        <div className="flex mt-6 gap-10">

          {/* Left Details */}
          <div className="flex-1">

            <table className="w-full text-sm">
              <tbody>

                <tr>
                  <td className="py-1">Name</td>
                  <td className="px-3">:</td>
                  <td>Dr. Vismay</td>
                </tr>

                <tr>
                  <td className="py-1">Date of Birth</td>
                  <td className="px-3">:</td>
                  <td>5 January 1995</td>
                </tr>

                <tr>
                  <td className="py-1">Place of Birth</td>
                  <td className="px-3">:</td>
                  <td>New Delhi</td>
                </tr>

                <tr>
                  <td className="py-1">Rashi</td>
                  <td className="px-3">:</td>
                  <td>Tula (Libra)</td>
                </tr>

                <tr>
                  <td className="py-1">Nakshatra</td>
                  <td className="px-3">:</td>
                  <td>Rohini</td>
                </tr>

                <tr>
                  <td className="py-1">Complexion</td>
                  <td className="px-3">:</td>
                  <td>Very Fair</td>
                </tr>

                <tr>
                  <td className="py-1">Height</td>
                  <td className="px-3">:</td>
                  <td>5 feet 5 inches</td>
                </tr>

                <tr>
                  <td className="py-1">Education</td>
                  <td className="px-3">:</td>
                  <td>
                    - MBBS (AIIMS) <br />
                    - MD (General Medicine) <br />
                    - DM (Neurology)
                  </td>
                </tr>

                <tr>
                  <td className="py-1">Occupation</td>
                  <td className="px-3">:</td>
                  <td>Doctor (Neurologist)</td>
                </tr>

              </tbody>
            </table>

          </div>

          {/* Profile Photo Placeholder */}
          <div className="w-48 h-60 bg-gray-300 flex items-center justify-center text-sm text-gray-600">
            Photo
          </div>

        </div>
      </div>

      {/* FAMILY DETAILS */}
      <div className="mb-8">

        <div className="bg-pink-500 text-white px-6 py-2 inline-block font-semibold">
          FAMILY DETAILS
        </div>

        <table className="w-full text-sm mt-6">
          <tbody>

            <tr>
              <td className="py-1">Father Name</td>
              <td className="px-3">:</td>
              <td>Dr. Prakash</td>
            </tr>

            <tr>
              <td className="py-1">Father's Occupation</td>
              <td className="px-3">:</td>
              <td>General Surgeon, Working in BTM Hospital</td>
            </tr>

            <tr>
              <td className="py-1">Mother Name</td>
              <td className="px-3">:</td>
              <td>Dr. Priyadarshini</td>
            </tr>

            <tr>
              <td className="py-1">Mother's Occupation</td>
              <td className="px-3">:</td>
              <td>Gynecologist, Working in Asian Hospital</td>
            </tr>

            <tr>
              <td className="py-1">Brother Name (Younger)</td>
              <td className="px-3">:</td>
              <td>Ravishankar</td>
            </tr>

            <tr>
              <td className="py-1">Brother's Occupation</td>
              <td className="px-3">:</td>
              <td>Pursuing B.E in Artificial Intelligence, Bangalore</td>
            </tr>

            <tr>
              <td className="py-1">Sister Name (Younger)</td>
              <td className="px-3">:</td>
              <td>Dr. Vaishnavi</td>
            </tr>

            <tr>
              <td className="py-1">Sister's Occupation</td>
              <td className="px-3">:</td>
              <td>Orthopedic Physiotherapist, Working in TMKC Hospital</td>
            </tr>

          </tbody>
        </table>

      </div>

      {/* CONTACT DETAILS */}
      <div>

        <div className="bg-pink-500 text-white px-6 py-2 inline-block font-semibold">
          CONTACT DETAILS
        </div>

        <table className="w-full text-sm mt-6">
          <tbody>

            <tr>
              <td className="py-1">Contact Number</td>
              <td className="px-3">:</td>
              <td>
                Father: +91 12345678901 <br />
                Mother: +91 12345678902
              </td>
            </tr>

            <tr>
              <td className="py-1">Address</td>
              <td className="px-3">:</td>
              <td>
                House #123, Plot #11, Sri Shiva Nilaya,
                <br />
                Nation Park Main Road, 1st Cross,
                <br />
                Surya International Hotel Layout,
                <br />
                Sri MahaEsha Nagar
              </td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>
  );
};

export default Template3;