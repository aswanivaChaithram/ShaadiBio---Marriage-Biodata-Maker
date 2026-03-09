import React from "react";

const Template4 = () => {
  return (
    <div className="w-[800px] min-h-[1100px] flex items-center justify-center p-10">

      {/* Biodata Card */}
      <div className="bg-white w-full border-4 border-white outline-40 outline-red-700 p-10">

        {/* Title */}
        <h1 className="text-center text-3xl font-serif text-red-700 mb-6">
          BIODATA
        </h1>

        {/* Profile Image Placeholder */}
        <div className="flex justify-center mb-10">
          <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
            Photo
          </div>
        </div>

        {/* PERSONAL DETAILS */}
        <div className="mb-8">

          <h2 className="text-red-700 font-semibold border-b-2 border-red-700 inline-block mb-4">
            PERSONAL DETAILS
          </h2>

          <table className="text-sm w-full">
            <tbody>

              <tr>
                <td className="py-1 w-1/3">Name</td>
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

        {/* FAMILY DETAILS */}
        <div className="mb-8">

          <h2 className="text-red-700 font-semibold border-b-2 border-red-700 inline-block mb-4">
            FAMILY DETAILS
          </h2>

          <table className="text-sm w-full">
            <tbody>

              <tr>
                <td className="py-1 w-1/3">Father Name</td>
                <td className="px-3">:</td>
                <td>Dr. Prakash</td>
              </tr>

              <tr>
                <td className="py-1">Father's Occupation</td>
                <td className="px-3">:</td>
                <td>
                  General Surgeon,<br />
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
                  Gynecologist,<br />
                  Working in Asian Hospital
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* CONTACT DETAILS */}
        <div>

          <h2 className="text-red-700 font-semibold border-b-2 border-red-700 inline-block mb-4">
            CONTACT DETAILS
          </h2>

          <table className="text-sm w-full">
            <tbody>

              <tr>
                <td className="py-1 w-1/3">Contact Number</td>
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
                  House #123, Plot #11, Sri Shiva Nilaya,<br />
                  Nation park main road, 1st cross opp. Surya<br />
                  International Hotel, layout Sri MahanEsha Nagar
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Template4;