import React from "react";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";
import Template5 from "../Templates/Template5";
import Template6 from "../Templates/Template6";

const Templates = () => {

  const templates = [
    Template1,
    Template2,
    Template3,
    Template4,
    Template5,
    Template6,
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12">

      {/* Heading */}
      <h1 className="text-center text-4xl font-bold text-orange-600 mb-14">
        Choose A Template
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 justify-items-center">

        {templates.map((Template, index) => (
          <div key={index} className="flex flex-col items-center gap-4">

            {/* Preview Card */}
            <div className="w-[312px] h-[430px] overflow-hidden rounded-lg flex justify-center">

              <div className="scale-[0.38] origin-top">
                <Template />
              </div>

            </div>

            {/* Button */}
            <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              Select Template
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Templates;

