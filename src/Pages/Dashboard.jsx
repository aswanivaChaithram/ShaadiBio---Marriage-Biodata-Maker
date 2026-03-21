import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template5";
import Template3 from "../Templates/Template6";

const Dashboard = ({ logoutUser }) => {

  const [activeTab, setActiveTab] = useState("templates");
  const [savedTemplates, setSavedTemplates] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const templates = [
    Template1,
    Template2,
    Template3
  ];

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("savedTemplates")) || [];

    setSavedTemplates(saved);

    const user =
      JSON.parse(localStorage.getItem("currentUser"));

    setCurrentUser(user);

  }, []);

  const downloadPDF = async (id) => {

  const element = document.getElementById(`template-${id}`);

  if (!element) {
    console.error("Template element not found");
    return;
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    letterRendering: true,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,

    onclone: (clonedDoc) => {
      const all = clonedDoc.querySelectorAll("*");

      all.forEach((el) => {
        const style = window.getComputedStyle(el);

        if (style.color.includes("oklch")) {
          el.style.color = "#000000";
        }

        if (style.backgroundColor.includes("oklch")) {
          el.style.backgroundColor = "#ffffff";
        }

        if (style.borderColor.includes("oklch")) {
          el.style.borderColor = "#000000";
        }
      });
    }
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  pdf.addImage(imgData, "PNG", 0, 0, 210, 297);

  pdf.save("ShaadiBio.pdf");

};

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}

      <div className="hidden md:flex flex-col w-[20%] bg-white shadow-md p-4 gap-4">

        <button
          onClick={() => setActiveTab("templates")}
          className={`p-2 rounded font-bold ${
            activeTab === "templates"
              ? "bg-orange-600 text-white"
              : "shadow text-orange-600"
          }`}
        >
          Your Templates
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          className={`p-2 rounded font-bold ${
            activeTab === "profile"
              ? "bg-orange-600 text-white"
              : "shadow text-orange-600"
          }`}
        >
          Profile
        </button>

      </div>

      {/* Main Section */}

      <div className="flex-1">

        {/* Mobile Tabs */}

        <div className="md:hidden flex justify-center gap-4 p-4 bg-white shadow">

          <button
            onClick={() => setActiveTab("templates")}
            className={`px-4 py-2 rounded font-bold ${
              activeTab === "templates"
                ? "bg-orange-600 text-white"
                : "shadow text-orange-600"
            }`}
          >
            Your Templates
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 rounded font-bold ${
              activeTab === "profile"
                ? "bg-orange-600 text-white"
                : "shadow text-orange-600"
            }`}
          >
            Profile
          </button>

        </div>

        {/* Content Area */}

        <div className="p-10">

          {/* Templates Section */}

          {activeTab === "templates" && (

            <div>

              <h2 className="text-3xl font-bold text-orange-600 mb-8">
                Your Templates
              </h2>

              {savedTemplates.length === 0 ? (
                <p>No templates saved yet.</p>
              ) : (

                <div className="flex flex-wrap gap-10">

                  {savedTemplates.map((item, index) => {

                    const Template =
                      templates[item.templateIndex];

                    return (
                      <div
                        key={item.id}
                        className="flex flex-col items-start gap-8"
                      >
                        {/* Preview Wrapper */}
                        <div
                          className="overflow-hidden"
                          style={{
                            width: "300px",
                            height: "420px" // ≈ 1123 * 0.38
                          }}
                        >
                          <div className="scale-[0.38] origin-top-left">
                            <div
                              id={`template-${item.id}`}
                              style={{
                                width: "794px",
                                minHeight: "1123px",
                                background: "white"
                              }}
                            >
                              <Template />
                            </div>
                          </div>
                        </div>

                        {/* Button */}
                        <button
                          onClick={() => downloadPDF(item.id)}
                          className="px-5 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 cursor-pointer"
                        >
                          Download
                        </button>
                      </div>
                    );

                  })}

                </div>

              )}

            </div>

          )}

          {/* Profile Section */}

          {activeTab === "profile" && currentUser && (

            <div>

              <h2 className="text-3xl font-bold text-orange-600 mb-8">
                Profile
              </h2>

              <div className="flex flex-col gap-4 text-lg">

                <div className="flex gap-4">
                  <span className="font-bold">Username:</span>
                  <span>{currentUser.username}</span>
                </div>

                <div className="flex gap-4">
                  <span className="font-bold">Email:</span>
                  <span>{currentUser.email}</span>
                </div>

                <div className="flex gap-4">
                  <span className="font-bold">Password:</span>
                  <span>{currentUser.password}</span>
                </div>

              </div>

              <button
                onClick={logoutUser}
                className="mt-8 px-6 py-2 rounded-full border border-orange-600 text-orange-600 font-bold hover:bg-orange-100"
              >
                Logout
              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  );

};

export default Dashboard;