import React from "react";
import { useBiodata } from "../Context/BiodataContext";
import { useTranslation } from "react-i18next";

const Template5 = () => {

  const { biodata } = useBiodata();
  const { t } = useTranslation();

  const hasHoroscope =
    biodata.timeOfBirth ||
    biodata.placeOfBirth ||
    biodata.rashi ||
    biodata.nakshatra;

  return (
    <div className="bg-[#efe7d3] flex justify-center w-[800px] min-h-[1100px]">

      {/* Main Card */}
      <div className="w-full px-10 py-10 relative border-l-[30px] border-r-[30px] border-red-700">

        {/* Title */}
        <h1 className="text-center text-3xl font-serif text-yellow-700 mb-14">
          BIODATA
        </h1>

        {/* Personal Section */}
        <div className="flex gap-10 mb-12">

          {/* Left Details */}
          <div className="flex-1">

            <h2 className="text-red-700 font-semibold mb-4">
              {t("personalDetails")}
            </h2>

            <table className="text-sm w-full">
              <tbody>

                {biodata.name && (
                  <tr>
                    <td className="py-1 w-40">{t("name")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.name}</td>
                  </tr>
                )}

                {biodata.gender && (
                  <tr>
                    <td className="py-1">{t("gender")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.gender}</td>
                  </tr>
                )}

                {biodata.dob && (
                  <tr>
                    <td className="py-1">{t("dob")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.dob}</td>
                  </tr>
                )}

                {biodata.age && (
                  <tr>
                    <td className="py-1">{t("age")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.age}</td>
                  </tr>
                )}

                {biodata.height && (
                  <tr>
                    <td className="py-1">{t("height")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.height}</td>
                  </tr>
                )}

                {biodata.religion && (
                  <tr>
                    <td className="py-1">{t("religion")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.religion}</td>
                  </tr>
                )}

                {biodata.caste && (
                  <tr>
                    <td className="py-1">{t("caste")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.caste}</td>
                  </tr>
                )}

                {biodata.motherTongue && (
                  <tr>
                    <td className="py-1">{t("motherTongue")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.motherTongue}</td>
                  </tr>
                )}

                {biodata.maritalStatus && (
                  <tr>
                    <td className="py-1">{t("maritalStatus")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.maritalStatus}</td>
                  </tr>
                )}

                {biodata.nationality && (
                  <tr>
                    <td className="py-1">{t("nationality")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.nationality}</td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>

          {/* Photo */}
          <div className="w-44 h-56 border-4 border-yellow-700 flex items-center justify-center text-sm text-gray-600 overflow-hidden">

            {biodata.photo ? (
              <img
                src={
                  typeof biodata.photo === "string"
                    ? biodata.photo
                    : URL.createObjectURL(biodata.photo)
                }
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              "Photo"
            )}

          </div>

        </div>

        {/* Family Details */}
        <div className="mb-12">

          <h2 className="text-red-700 font-semibold mb-4">
            {t("familyDetails")}
          </h2>

          <table className="text-sm w-full">
            <tbody>

              {biodata.fatherName && (
                <tr>
                  <td className="py-1 w-40">{t("fatherName")}</td>
                  <td className="px-3">:</td>
                  <td>{biodata.fatherName}</td>
                </tr>
              )}

              {biodata.fatherOccupation && (
                <tr>
                  <td className="py-1">{t("fatherOccupation")}</td>
                  <td className="px-3">:</td>
                  <td>{biodata.fatherOccupation}</td>
                </tr>
              )}

              {biodata.motherName && (
                <tr>
                  <td className="py-1">{t("motherName")}</td>
                  <td className="px-3">:</td>
                  <td>{biodata.motherName}</td>
                </tr>
              )}

              {biodata.motherOccupation && (
                <tr>
                  <td className="py-1">{t("motherOccupation")}</td>
                  <td className="px-3">:</td>
                  <td>{biodata.motherOccupation}</td>
                </tr>
              )}

              {biodata.totalBrothers && (
                <tr>
                  <td className="py-1">{t("totalBrothers")}</td>
                  <td className="px-3">:</td>
                  <td>{biodata.totalBrothers}</td>
                </tr>
              )}

              {biodata.totalSisters && (
                <tr>
                  <td className="py-1">{t("totalSisters")}</td>
                  <td className="px-3">:</td>
                  <td>{biodata.totalSisters}</td>
                </tr>
              )}

              {biodata.nativePlace && (
                <tr>
                  <td className="py-1">{t("nativePlace")}</td>
                  <td className="px-3">:</td>
                  <td>{biodata.nativePlace}</td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Education & Professional */}
        <div className="mb-10">

          <h2 className="text-red-700 font-semibold mb-4">
            {t("educationProfessionalDetails")}
          </h2>

          <table className="text-sm w-full">
            <tbody>

              {biodata.education && (
                <tr>
                  <td className="py-1 w-40">{t("education")}</td>
                  <td className="px-3">:</td>
                  <td>{biodata.education}</td>
                </tr>
              )}

              {biodata.occupation && (
                <tr>
                  <td className="py-1">{t("occupation")}</td>
                  <td className="px-3">:</td>
                  <td>{biodata.occupation}</td>
                </tr>
              )}

              {biodata.income && (
                <tr>
                  <td className="py-1">{t("income")}</td>
                  <td className="px-3">:</td>
                  <td>₹{Number(biodata.income).toLocaleString("en-IN")}</td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Contact Details */}
        <div>

          <h2 className="text-red-700 font-semibold mb-4">
            {t("contactDetails")}
          </h2>

          <table className="text-sm w-full">
            <tbody>

              {biodata.contactNumber && (
                <tr>
                  <td className="py-1 w-40">{t("contactNumber")}</td>
                  <td className="px-3">:</td>
                  <td>{biodata.contactNumber}</td>
                </tr>
              )}

              {biodata.contactEmail && (
                <tr>
                  <td className="py-1">{t("contactEmail")}</td>
                  <td className="px-3">:</td>
                  <td>{biodata.contactEmail}</td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Horoscope */}
        {hasHoroscope && (
          <div className="mt-10 mb-6">

            <h2 className="text-red-700 font-semibold mb-4">
              {t("horoscopeDetails").replace(/\s*\([^)]*\)\s*$/, "")}
            </h2>

            <table className="text-sm w-full">
              <tbody>

                {biodata.timeOfBirth && (
                  <tr>
                    <td className="py-1 w-40">{t("timeOfBirth")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.timeOfBirth}</td>
                  </tr>
                )}

                {biodata.placeOfBirth && (
                  <tr>
                    <td className="py-1">{t("placeOfBirth")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.placeOfBirth}</td>
                  </tr>
                )}

                {biodata.rashi && (
                  <tr>
                    <td className="py-1">{t("rashi")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.rashi}</td>
                  </tr>
                )}

                {biodata.nakshatra && (
                  <tr>
                    <td className="py-1">{t("nakshatra")}</td>
                    <td className="px-3">:</td>
                    <td>{biodata.nakshatra}</td>
                  </tr>
                )}

              </tbody>
            </table>

          </div>
        )}

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
            Generated by ShaadiBio
        </div>

      </div>
    </div>
  );
};

export default Template5;