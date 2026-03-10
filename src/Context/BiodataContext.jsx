import React, { createContext, useContext, useState, useEffect } from "react";

const BiodataContext = createContext();

export const useBiodata = () => useContext(BiodataContext);

const initialState = {

  language: "en",
  selectedTemplate: null,

  biodata: {
    name: "",
    gender: "",
    dob: "",
    age: "",
    height: "",
    religion: "",
    caste: "",
    motherTongue: "",
    maritalStatus: "",
    nationality: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    totalBrothers: "",
    totalSisters: "",
    nativePlace: "",
    education: "",
    occupation: "",
    income: "",
    contactNumber: "",
    contactEmail: "",
    timeOfBirth: "",
    placeOfBirth: "",
    rashi: "",
    nakshatra: "",
    photo: null,
  },
};

export const BiodataProvider = ({ children }) => {

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("biodata");
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("biodata", JSON.stringify(data));
  }, [data]);

  const updateField = (name, value) => {
    setData((prev) => ({
      ...prev,
      biodata: {
        ...prev.biodata,
        [name]: value,
      },
    }));
  };

  const setLanguage = (lng) => {
    setData((prev) => ({
      ...prev,
      language: lng,
    }));
  };

  // store selected template
  const selectTemplate = (index) => {
    setData((prev) => ({
      ...prev,
      selectedTemplate: index,
    }));
  };

  const resetTemplate = () => {
    setData((prev) => ({
      ...prev,
      selectedTemplate: null,
    }));
  };

  const clearBiodata = () => {
    localStorage.removeItem("biodata");
    setData(initialState);
  };

  return (
    <BiodataContext.Provider
      value={{
        data,
        biodata: data.biodata,
        language: data.language,
        selectedTemplate: data.selectedTemplate,
        updateField,
        setLanguage,
        selectTemplate, 
        resetTemplate,
        clearBiodata,
      }}
    >
      {children}
    </BiodataContext.Provider>
  );
};