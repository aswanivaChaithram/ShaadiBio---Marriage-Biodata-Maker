import React from "react";

const Template5 = () => {
  return (
    <div className="bg-[#efe7d3] flex justify-center w-full h-full">

      {/* Main Card */}
      <div className="w-full px-10 py-10 border-l-30 border-r-30 border-red-700">

        {/* Title */}
        <h1 className="text-center text-3xl font-serif text-yellow-700 mb-10">
          BIODATA
        </h1>

        {/* Personal Section */}
        <div className="flex gap-10 mb-10">

          {/* Left Details */}
          <div className="flex-1">

            <h2 className="text-red-700 font-semibold mb-4">
              PERSONAL DETAILS
            </h2>

            <table className="text-sm w-full">
              <tbody>

                <tr>
                  <td className="py-1 w-40">Name</td>
                  <td className="px-3">:</td>
                  <td>Dr. Vismaya</td>
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

          {/* Photo Placeholder */}
          <div className="w-44 h-56 border-4 border-yellow-700 flex items-center justify-center text-sm text-gray-600">
            Photo
          </div>

        </div>

        {/* Family Details */}
        <div className="mb-10">

          <h2 className="text-red-700 font-semibold mb-4">
            FAMILY DETAILS
          </h2>

          <table className="text-sm w-full">
            <tbody>

              <tr>
                <td className="py-1 w-40">Father Name</td>
                <td className="px-3">:</td>
                <td>Dr. Prakash</td>
              </tr>

              <tr>
                <td className="py-1">Father's Occupation</td>
                <td className="px-3">:</td>
                <td>
                  General Surgeon, <br />
                  Working in BTM Hospital
                </td>
              </tr>

              <tr>
                <td className="py-1">Mother Name</td>
                <td className="px-3">:</td>
                <td>Dr. Priyadarshini</td>
              </tr>

              <tr>
                <td className="py-1">Mother's Occupation</td>
                <td className="px-3">:</td>
                <td>
                  Gynecologist, <br />
                  Working in Asian Hospital
                </td>
              </tr>

              <tr>
                <td className="py-1">Brother Name (Younger)</td>
                <td className="px-3">:</td>
                <td>Ravishankar</td>
              </tr>

              <tr>
                <td className="py-1">Brother's Occupation</td>
                <td className="px-3">:</td>
                <td>
                  Pursuing B.E in Artificial Intelligence,
                  Bangalore
                </td>
              </tr>

              <tr>
                <td className="py-1">Sister Name (Younger)</td>
                <td className="px-3">:</td>
                <td>Dr. Vaishnavi</td>
              </tr>

              <tr>
                <td className="py-1">Sister's Occupation</td>
                <td className="px-3">:</td>
                <td>
                  Orthopedic Physiotherapist,
                  Working in TMKC Hospital
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Contact Details */}
        <div>

          <h2 className="text-red-700 font-semibold mb-4">
            CONTACT DETAILS
          </h2>

          <table className="text-sm w-full">
            <tbody>

              <tr>
                <td className="py-1 w-40">Contact Number</td>
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
                  Nation park main road, 1st cross opp.
                  Surya International Hotel,
                  layout Sri MahanEsha Nagar
                </td>
              </tr>

            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
};

export default Template5;