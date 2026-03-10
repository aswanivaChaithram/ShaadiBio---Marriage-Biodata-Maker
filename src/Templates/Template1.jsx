import React from "react";
import { useBiodata } from "../Context/BiodataContext";
import { useTranslation } from "react-i18next";

const Template1 = () => {

  const { biodata } = useBiodata();
  const { t } = useTranslation();

  const hasPersonal =
    biodata.name ||
    biodata.gender ||
    biodata.dob ||
    biodata.age ||
    biodata.height ||
    biodata.religion ||
    biodata.caste ||
    biodata.motherTongue ||
    biodata.maritalStatus ||
    biodata.nationality;

  const hasFamily =
    biodata.fatherName ||
    biodata.fatherOccupation ||
    biodata.motherName ||
    biodata.motherOccupation ||
    biodata.totalBrothers ||
    biodata.totalSisters ||
    biodata.nativePlace;

  const hasEducation =
    biodata.education ||
    biodata.occupation ||
    biodata.income;

  const hasContact =
    biodata.contactNumber ||
    biodata.contactEmail;

  const hasHoroscope =
    biodata.timeOfBirth ||
    biodata.placeOfBirth ||
    biodata.rashi ||
    biodata.nakshatra;

  return (
    <div className="w-[800px] min-h-[1100px] relative border-4 border-orange-400 p-8 bg-gray-100">

      {/* Title */}
      <h2 className="text-center text-lg font-semibold tracking-wide mb-6">
        BIODATA
      </h2>

      {/* Top Section */}
      <div className="flex gap-6 items-start mb-6">

        {/* Profile Image */}
        <div className="w-32 h-36 bg-gray-300 flex items-center justify-center overflow-hidden">
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
            <span className="text-xs text-gray-600">Profile Image</span>
          )}
        </div>

        {/* Name */}
        <div>
          <h1 className="text-3xl font-bold text-orange-500 mb-3">
            {biodata.name || "Your Name"}
          </h1>

          <p className="mb-1"> 
            <span className="font-semibold">{t("dob")}:</span> 
            {biodata.dob} 
          </p> 
          
          <p> 
            <span className="font-semibold">{t("placeOfBirth")}:</span>
            {biodata.placeOfBirth} 
          </p>

        </div>

      </div>

      {/* PERSONAL DETAILS */}
      {hasPersonal && (
        <div className="mb-6">

          <h3 className="font-bold underline mb-4">
            {t("personalDetails")}
          </h3>

          <div className="grid grid-cols-2 gap-y-2 text-sm">

            {biodata.name && (
              <>
                <p>{t("name")}:</p>
                <p>{biodata.name}</p>
              </>
            )}

            {biodata.gender && (
              <>
                <p>{t("gender")}:</p>
                <p>{biodata.gender}</p>
              </>
            )}

            {biodata.dob && (
              <>
                <p>{t("dob")}:</p>
                <p>{biodata.dob}</p>
              </>
            )}

            {biodata.age && (
              <>
                <p>{t("age")}:</p>
                <p>{biodata.age}</p>
              </>
            )}

            {biodata.height && (
              <>
                <p>{t("height")}:</p>
                <p>{biodata.height}</p>
              </>
            )}

            {biodata.religion && (
              <>
                <p>{t("religion")}:</p>
                <p>{biodata.religion}</p>
              </>
            )}

            {biodata.caste && (
              <>
                <p>{t("caste")}:</p>
                <p>{biodata.caste}</p>
              </>
            )}

            {biodata.motherTongue && (
              <>
                <p>{t("motherTongue")}:</p>
                <p>{biodata.motherTongue}</p>
              </>
            )}

            {biodata.maritalStatus && (
              <>
                <p>{t("maritalStatus")}:</p>
                <p>{biodata.maritalStatus}</p>
              </>
            )}

            {biodata.nationality && (
              <>
                <p>{t("nationality")}:</p>
                <p>{biodata.nationality}</p>
              </>
            )}

          </div>

        </div>
      )}

      {/* FAMILY BACKGROUND */}
      {hasFamily && (
        <div className="mb-6">

          <h3 className="font-bold underline mb-4">
            {t("familyBackgroundDetails")}
          </h3>

          <div className="grid grid-cols-2 gap-y-2 text-sm">

            {biodata.fatherName && (
              <>
                <p>{t("fatherName")}:</p>
                <p>{biodata.fatherName}</p>
              </>
            )}

            {biodata.fatherOccupation && (
              <>
                <p>{t("fatherOccupation")}:</p>
                <p>{biodata.fatherOccupation}</p>
              </>
            )}

            {biodata.motherName && (
              <>
                <p>{t("motherName")}:</p>
                <p>{biodata.motherName}</p>
              </>
            )}

            {biodata.motherOccupation && (
              <>
                <p>{t("motherOccupation")}:</p>
                <p>{biodata.motherOccupation}</p>
              </>
            )}

            {biodata.totalBrothers && (
              <>
                <p>{t("totalBrothers")}:</p>
                <p>{biodata.totalBrothers}</p>
              </>
            )}

            {biodata.totalSisters && (
              <>
                <p>{t("totalSisters")}:</p>
                <p>{biodata.totalSisters}</p>
              </>
            )}

            {biodata.nativePlace && (
              <>
                <p>{t("nativePlaceResidence")}:</p>
                <p>{biodata.nativePlace}</p>
              </>
            )}

          </div>

        </div>
      )}

      {/* EDUCATION & PROFESSIONAL */}
      {hasEducation && (
        <div className="mb-6">

          <h3 className="font-bold underline mb-4">
            {t("educationProfessionalDetails")}
          </h3>

          <div className="grid grid-cols-2 gap-y-2 text-sm">

            {biodata.education && (
              <>
                <p>{t("education")}:</p>
                <p>{biodata.education}</p>
              </>
            )}

            {biodata.occupation && (
              <>
                <p>{t("occupation")}:</p>
                <p>{biodata.occupation}</p>
              </>
            )}

            {biodata.income && (
              <>
                <p>{t("income")}:</p>
                <p>₹{Number(biodata.income).toLocaleString("en-IN")}</p>
              </>
            )}

          </div>

        </div>
      )}

      {/* CONTACT */}
      {hasContact && (
        <div className="mb-6">

          <h3 className="font-bold underline mb-4">
            {t("contactDetails")}
          </h3>

          <div className="grid grid-cols-2 gap-y-2 text-sm">

            {biodata.contactNumber && (
              <>
                <p>{t("contactNumber")}:</p>
                <p>{biodata.contactNumber}</p>
              </>
            )}

            {biodata.contactEmail && (
              <>
                <p>{t("contactEmail")}:</p>
                <p>{biodata.contactEmail}</p>
              </>
            )}

          </div>

        </div>
      )}

      {/* HOROSCOPE */}
      {hasHoroscope && (
        <div className="mb-6">

          <h3 className="font-bold underline mb-4">
            {t("horoscopeDetails").replace(/\s*\([^)]*\)\s*$/, "")}
          </h3>

          <div className="grid grid-cols-2 gap-y-2 text-sm">

            {biodata.timeOfBirth && (
              <>
                <p>{t("timeOfBirth")}:</p>
                <p>{biodata.timeOfBirth}</p>
              </>
            )}

            {biodata.placeOfBirth && (
              <>
                <p>{t("placeOfBirth")}:</p>
                <p>{biodata.placeOfBirth}</p>
              </>
            )}

            {biodata.rashi && (
              <>
                <p>{t("rashi")}:</p>
                <p>{biodata.rashi}</p>
              </>
            )}

            {biodata.nakshatra && (
              <>
                <p>{t("nakshatra")}:</p>
                <p>{biodata.nakshatra}</p>
              </>
            )}

          </div>

        </div>
      )}

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
            Generated by ShaadiBio
      </div>

    </div>
  );
};

export default Template1;