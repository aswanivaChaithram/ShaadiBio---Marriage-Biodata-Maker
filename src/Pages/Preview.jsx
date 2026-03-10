import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useBiodata } from "../Context/BiodataContext";

import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template5";
import Template3 from "../Templates/Template6";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Preview = () => {

  const navigate = useNavigate();
  const { selectedTemplate, resetTemplate } = useBiodata();

  const [showPopup, setShowPopup] = useState(false);

  const templateRef = useRef();

  const templates = [
    Template1,
    Template2,
    Template3
  ];

  const SelectedTemplate = templates[selectedTemplate];

  useEffect(() => {
    if (selectedTemplate === null) {
      navigate("/templates");
    }
  }, [selectedTemplate, navigate]);

  const handleBack = () => {
    resetTemplate();
    navigate("/templates");
  };

  // SAVE TEMPLATE
  const handleSave = () => {

    const savedTemplates =
      JSON.parse(localStorage.getItem("savedTemplates")) || [];

    savedTemplates.push({
      templateIndex: selectedTemplate,
      id: Date.now()
    });

    localStorage.setItem("savedTemplates", JSON.stringify(savedTemplates));

    setShowPopup(true);
  };

  // DOWNLOAD PDF
  const downloadPDF = async () => {

    const element = templateRef.current;

    const canvas = await html2canvas(element);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const width = pdf.internal.pageSize.getWidth();

    const height =
      (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);

    pdf.save("ShaadiBio.pdf");
  };

  return (
    <div className="bg-gray-100 py-6 md:py-10 h-fit">

      <h1 className="text-center text-4xl font-bold text-orange-600 mb-8">
        Preview
      </h1>

      <div className="flex justify-center items-start overflow-hidden">

        <div
          ref={templateRef}
          className="bg-white shadow-lg p-6 h-fit scale-40 sm:scale-60 md:scale-100 origin-top"
        >
          {SelectedTemplate && <SelectedTemplate />}
        </div>

      </div>

      <div className="flex justify-center mt-14 gap-4">

        <button
          onClick={handleBack}
          className="px-5 py-2 border border-blue-700 text-blue-700 font-bold rounded cursor-pointer"
        >
          Back
        </button>

        <button
          onClick={handleSave}
          className="px-5 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 cursor-pointer"
        >
          Save
        </button>

      </div>

      {/* POPUP */}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">

          <div className="bg-white p-8 rounded shadow-lg text-center w-[350px]">

            <h2 className="text-xl font-bold mb-6">
              Your Template is saved successfully in Dashboard
            </h2>

            <button
              onClick={downloadPDF}
              className="px-5 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 cursor-pointer"
            >
              Download
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Preview;