import React from "react";
import { useBiodata } from "../Context/BiodataContext";
import { useTranslation } from "react-i18next";

const Template6 = () => {

  const { biodata } = useBiodata();
  const { t } = useTranslation();

  const hasHoroscope =
    biodata.timeOfBirth ||
    biodata.placeOfBirth ||
    biodata.rashi ||
    biodata.nakshatra;

  return (
    <div className="bg-gray-100 flex justify-center p-4 w-[794px] min-h-[1123px]">

      {/* Main Container */}
      <div className="bg-white w-full relative flex shadow-lg relative overflow-hidden">

        {/* Left Red Sidebar */}
        <div className="w-12 bg-[#c1272d] flex flex-col items-center py-10 gap-1 border-r-4 border-white">
          <div className="w-full h-full border-r border-white/30"></div>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-12 py-10 relative">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-[#c1272d] text-4xl font-bold tracking-[0.2em] mb-2">
              BIODATA
            </h1>
            <div className="w-24 h-1 bg-[#c1272d] mx-auto"></div>
          </div>

          {/* Profile Image */}
          <div className="absolute top-10 right-8">
            <div className="w-40 h-40 rounded-full border-4 border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center text-gray-400 italic shadow-md">

              {biodata.photo ? (
                <img
                  src={biodata.photo}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>Profile Photo</span>
              )}

            </div>
          </div>

          {/* PERSONAL DETAILS */}
          <section className="mb-10">

            <h2 className="text-[#c1272d] font-bold text-xl border-b-2 border-[#c1272d] inline-block mb-6 pr-8">
              {t("personalDetails")}
            </h2>

            <table className="w-full text-gray-800">
              <tbody className="text-base">

                {biodata.name && (
                  <tr>
                    <td className="w-48 font-medium">{t("name")}</td>
                    <td className="w-8 text-center">:</td>
                    <td>{biodata.name}</td>
                  </tr>
                )}

                {biodata.gender && (
                  <tr>
                    <td className="font-medium">{t("gender")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.gender}</td>
                  </tr>
                )}

                {biodata.dob && (
                  <tr>
                    <td className="font-medium">{t("dob")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.dob}</td>
                  </tr>
                )}

                {biodata.age && (
                  <tr>
                    <td className="font-medium">{t("age")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.age}</td>
                  </tr>
                )}

                {biodata.height && (
                  <tr>
                    <td className="font-medium">{t("height")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.height}</td>
                  </tr>
                )}

                {biodata.religion && (
                  <tr>
                    <td className="font-medium">{t("religion")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.religion}</td>
                  </tr>
                )}

                {biodata.caste && (
                  <tr>
                    <td className="font-medium">{t("caste")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.caste}</td>
                  </tr>
                )}

                {biodata.motherTongue && (
                  <tr>
                    <td className="font-medium">{t("motherTongue")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.motherTongue}</td>
                  </tr>
                )}

                {biodata.maritalStatus && (
                  <tr>
                    <td className="font-medium">{t("maritalStatus")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.maritalStatus}</td>
                  </tr>
                )}

                {biodata.nationality && (
                  <tr>
                    <td className="font-medium">{t("nationality")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.nationality}</td>
                  </tr>
                )}

              </tbody>
            </table>

          </section>

          {/* FAMILY DETAILS */}
          <section className="mb-10">

            <h2 className="text-[#c1272d] font-bold text-xl border-b-2 border-[#c1272d] inline-block mb-6 pr-8">
              {t("familyDetails")}
            </h2>

            <table className="w-full text-gray-800">
              <tbody className="text-base">

                {biodata.fatherName && (
                  <tr>
                    <td className="w-48 font-medium">{t("fatherName")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.fatherName}</td>
                  </tr>
                )}

                {biodata.fatherOccupation && (
                  <tr>
                    <td className="font-medium">{t("fatherOccupation")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.fatherOccupation}</td>
                  </tr>
                )}

                {biodata.motherName && (
                  <tr>
                    <td className="font-medium">{t("motherName")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.motherName}</td>
                  </tr>
                )}

                {biodata.motherOccupation && (
                  <tr>
                    <td className="font-medium">{t("motherOccupation")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.motherOccupation}</td>
                  </tr>
                )}

                {biodata.totalBrothers && (
                  <tr>
                    <td className="font-medium">{t("totalBrothers")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.totalBrothers}</td>
                  </tr>
                )}

                {biodata.totalSisters && (
                  <tr>
                    <td className="font-medium">{t("totalSisters")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.totalSisters}</td>
                  </tr>
                )}

                {biodata.nativePlace && (
                  <tr>
                    <td className="font-medium">{t("nativePlace")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.nativePlace}</td>
                  </tr>
                )}

              </tbody>
            </table>

          </section>

          {/* EDUCATION & PROFESSIONAL */}
          <section className="mb-10">

            <h2 className="text-[#c1272d] font-bold text-xl border-b-2 border-[#c1272d] inline-block mb-6 pr-8">
              {t("educationProfessionalDetails")}
            </h2>

            <table className="w-full text-gray-800">
              <tbody className="text-base">

                {biodata.education && (
                  <tr>
                    <td className="w-48 font-medium">{t("education")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.education}</td>
                  </tr>
                )}

                {biodata.occupation && (
                  <tr>
                    <td className="font-medium">{t("occupation")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.occupation}</td>
                  </tr>
                )}

                {biodata.income && (
                  <tr>
                    <td className="font-medium">{t("income")}</td>
                    <td className="text-center">:</td>
                    <td>₹{Number(biodata.income).toLocaleString("en-IN")}</td>
                  </tr>
                )}

              </tbody>
            </table>

          </section>

          {/* CONTACT DETAILS */}
          <section className="mb-12">

            <h2 className="text-[#c1272d] font-bold text-xl border-b-2 border-[#c1272d] inline-block mb-6 pr-8">
              {t("contactDetails")}
            </h2>

            <table className="w-full text-gray-800">
              <tbody className="text-base">

                {biodata.contactNumber && (
                  <tr>
                    <td className="w-48 font-medium">{t("contactNumber")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.contactNumber}</td>
                  </tr>
                )}

                {biodata.contactEmail && (
                  <tr>
                    <td className="font-medium">{t("contactEmail")}</td>
                    <td className="text-center">:</td>
                    <td>{biodata.contactEmail}</td>
                  </tr>
                )}

              </tbody>
            </table>

          </section>

          {/* HOROSCOPE */}
          {hasHoroscope && (
            <section className="mb-10">

              <h2 className="text-[#c1272d] font-bold text-xl border-b-2 border-[#c1272d] inline-block mb-6 pr-8">
                {t("horoscopeDetails").replace(/\s*\([^)]*\)\s*$/, "")}
              </h2>

              <table className="w-full text-gray-800">
                <tbody className="text-base">

                  {biodata.timeOfBirth && (
                    <tr>
                      <td className="w-48 font-medium">{t("timeOfBirth")}</td>
                      <td className="text-center">:</td>
                      <td>{biodata.timeOfBirth}</td>
                    </tr>
                  )}

                  {biodata.placeOfBirth && (
                    <tr>
                      <td className="font-medium">{t("placeOfBirth")}</td>
                      <td className="text-center">:</td>
                      <td>{biodata.placeOfBirth}</td>
                    </tr>
                  )}

                  {biodata.rashi && (
                    <tr>
                      <td className="font-medium">{t("rashi")}</td>
                      <td className="text-center">:</td>
                      <td>{biodata.rashi}</td>
                    </tr>
                  )}

                  {biodata.nakshatra && (
                    <tr>
                      <td className="font-medium">{t("nakshatra")}</td>
                      <td className="text-center">:</td>
                      <td>{biodata.nakshatra}</td>
                    </tr>
                  )}

                </tbody>
              </table>

            </section>
          )}

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
            Generated by ShaadiBio
          </div>

        </div>
      </div>
    </div>
  );
};

export default Template6;