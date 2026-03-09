import React from 'react';

const Template6 = () => {
  return (
    <div className="bg-gray-100 flex justify-center p-4 w-[800px] min-h-[1100px]">
      {/* Main Container */}
      <div className="bg-white w-full flex shadow-lg relative overflow-hidden">
        
        {/* Left Red Sidebar Accent */}
        <div className="w-12 bg-[#c1272d] flex flex-col items-center py-10 gap-1 border-r-4 border-white">
          <div className="w-full h-full border-r border-white/30"></div>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-12 py-10 relative">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-[#c1272d] text-4xl font-bold tracking-[0.2em] mb-2">
              BIODATA
            </h1>
            <div className="w-24 h-1 bg-[#c1272d] mx-auto"></div>
          </div>

          {/* Profile Image - Absolute Positioned to match the circular design in image */}
          <div className="absolute top-10 right-8">
             <div className="w-40 h-40 rounded-full border-4 border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center text-gray-400 italic shadow-md">
                {/* Image will go here */}
                <span>Profile Photo</span>
             </div>
          </div>

          {/* PERSONAL DETAILS SECTION */}
          <section className="mb-4">
            <h2 className="text-[#c1272d] font-bold text-xl border-b-2 border-[#c1272d] inline-block mb-6 pr-8">
              PERSONAL DETAILS
            </h2>
            
            <table className="w-full text-gray-800">
              <tbody className="text-base">
                {[
                  ["Name", "Dr. Vismaya"],
                  ["Date of Birth", "5 January 1995"],
                  ["Place of Birth", "New Delhi"],
                  ["Rashi", "Tula (Libra)"],
                  ["Nakshatra", "Rohini"],
                  ["Complexion", "Very Fair"],
                  ["Height", "5 feet 5 inches"],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td className="w-48 font-medium">{label}</td>
                    <td className="w-8 text-center">:</td>
                    <td>{value}</td>
                  </tr>
                ))}
                <tr>
                  <td className="font-medium py-1 align-top">Education</td>
                  <td className="text-center align-top py-1">:</td>
                  <td className="py-1">
                    <ul className="list-none">
                      <li>- MBBS (AIMS)</li>
                      <li>- MD (General Medicine)</li>
                      <li>- DM (Neurology)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium py-1">Occupation</td>
                  <td className="text-center">:</td>
                  <td className="py-1">Doctor (Neurologist)</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* FAMILY DETAILS SECTION */}
          <section className="mb-4">
            <h2 className="text-[#c1272d] font-bold text-xl border-b-2 border-[#c1272d] inline-block mb-6 pr-8">
              FAMILY DETAILS
            </h2>
            
            <table className="w-full text-gray-800">
              <tbody className="text-base">
                <tr>
                  <td className="w-48 font-medium">Father Name</td>
                  <td className="w-8 text-center">:</td>
                  <td>Dr. Prakash</td>
                </tr>
                <tr>
                  <td className="font-medium align-top">Father's Occupation</td>
                  <td className="text-center align-top">:</td>
                  <td>General Surgeon,<br/>Working in BTM Hospital</td>
                </tr>
                <tr>
                  <td className="font-medium">Mother Name</td>
                  <td className="text-center">:</td>
                  <td>Dr. Priyadarshini</td>
                </tr>
                <tr>
                  <td className="font-medium align-top">Mother's Occupation</td>
                  <td className="text-center align-top">:</td>
                  <td>Gynecologist,<br/>Working in Asian Hospital</td>
                </tr>
                <tr>
                  <td className="font-medium">Brother Name (Younger)</td>
                  <td className="text-center">:</td>
                  <td>Ravishankar</td>
                </tr>
                <tr>
                  <td className="font-medium py-1 align-top">Brother's Occupation (Younger)</td>
                  <td className="text-center align-top">:</td>
                  <td className="text-sm">Pursuing B.E in Artificial Intelligence, Bangalore</td>
                </tr>
                <tr>
                  <td className="font-medium">Sister Name (Younger)</td>
                  <td className="text-center">:</td>
                  <td>Dr. Vaishnavi</td>
                </tr>
                <tr>
                  <td className="font-medium py-1 align-top">Sister's Occupation (Younger)</td>
                  <td className="text-center align-top py-1">:</td>
                  <td>Orthopedic Physiotherapist,<br/>Working in TMKC Hospital</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* CONTACT DETAILS SECTION */}
          <section className="mb-12">
            <h2 className="text-[#c1272d] font-bold text-xl border-b-2 border-[#c1272d] inline-block mb-6 pr-8">
              CONTACT DETAILS
            </h2>
            
            <table className="w-full text-gray-800">
              <tbody className="text-base">
                <tr>
                  <td className="w-48 font-medium py-1 align-top">Contact Number</td>
                  <td className="w-8 text-center align-top py-1">:</td>
                  <td className="py-1">
                    Father: +91 12345678901 <br/>
                    Mother: +91 12345678902
                  </td>
                </tr>
                <tr>
                  <td className="font-medium py-1 align-top">Address</td>
                  <td className="text-center align-top py-1">:</td>
                  <td className="py-1 pr-10 text-sm leading-relaxed">
                    House # 123. Plot # 11, Sri Shiva Nilaya, Nation park main road, 
                    1st cross opp. Surya International Hotel, layout Sri MahanEsha Nagar
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default Template6;