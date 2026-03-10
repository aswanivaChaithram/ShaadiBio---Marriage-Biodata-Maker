import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBiodata } from "../Context/BiodataContext";

import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template5";
import Template3 from "../Templates/Template6";

const Templates = () => {

  const navigate = useNavigate();
  const { selectedTemplate, selectTemplate } = useBiodata();

  const templates = [
    Template1,
    Template2,
    Template3
  ];

  const handleSelect = (index) => {
    selectTemplate(index);
  };

  const handlePreview = () => {

    if (selectedTemplate === null) {
      alert("Please select a template first");
      return;
    }

    navigate("/preview");
  };

  const handlePrev = () => {
    navigate("/personal-details");
  };

  return (

    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12">

      {/* Heading */}
      <h1 className="text-center text-4xl font-bold text-orange-600 mb-14">
        Choose A Template
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 justify-items-center">

        {templates.map((Template, index) => (
          <div key={index} className="flex flex-col items-center gap-6">

            {/* Preview Card */}
            <div className="w-[312px] h-[500px] overflow-hidden rounded-lg flex justify-center">

              <div className="scale-[0.38] origin-top">
                <Template />
              </div>

            </div>

            {/* Select Button */}
            <button
              onClick={() => handleSelect(index)}
              className={`px-6 py-2 rounded-lg font-bold transition cursor-pointer
              ${
                selectedTemplate === index
                  ? "bg-green-600 text-white cursor-default"
                  : "bg-orange-600 text-white hover:bg-orange-700"
              }`}
            >
              {selectedTemplate === index ? "Selected" : "Select Template"}
            </button>

          </div>
        ))}

      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4 mt-10">

        {/* Previous Button */}
        <button onClick={handlePrev}
          className="px-4 py-1.5 border border-blue-700 text-blue-700 font-bold rounded cursor-pointer hover:bg-gray-100">
             Back
        </button>

        {/* Preview Button */}
        <button onClick={handlePreview}
          className="px-4 py-1.5 border border-orange-600 text-orange-600 font-bold rounded cursor-pointer hover:bg-orange-50">
              Preview
        </button>

      </div>
    </div>
  );
};

export default Templates;

