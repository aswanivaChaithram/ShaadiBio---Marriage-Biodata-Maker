import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LivePreview from '../components/LivePreview';
import FormData from '../components/FormData';
import { useBiodata } from "../Context/BiodataContext";

const PersonalDetails = () => {

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { biodata, updateField, setLanguage, clearBiodata } = useBiodata();
  const [errors, setErrors] = useState({});

  // compute age when dob changes
  useEffect(() => {
  if (biodata.dob) {
    const birth = new Date(biodata.dob);
    const diff = Date.now() - birth.getTime();
    const ageDt = new Date(diff);
    const age = Math.abs(ageDt.getUTCFullYear() - 1970);
    updateField("age", age.toString());
  }
}, [biodata.dob]);

  const handleInput = (e) => {
    
  const { name, value, files } = e.target;

    if (name === "photo" && files.length) {

      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        updateField(name, reader.result); // save Base64 image
      };

      reader.readAsDataURL(file);

    } else {
      updateField(name, value);
    }

    // clear validation error for this field once user types
    if (errors[name]) {
      setErrors((prev) => {
        const nxt = { ...prev };
        delete nxt[name];
        return nxt;
      });
    }
  };

  // Language Change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const handleSubmit = () => {
    const required = [
      'name','gender','dob','height','religion','caste','motherTongue','maritalStatus','nationality',
      'fatherName','fatherOccupation','motherName','motherOccupation','totalBrothers','totalSisters','nativePlace',
      'education','occupation','income','contactNumber','contactEmail','photo',
    ];

    const newErrors = {};
    
    required.forEach((field) => {
      if (!biodata[field]) {
        newErrors[field] = 'Please fill this field';
      }
    });

    // Age validation
    if (biodata.age && Number(biodata.age) < 18) {
      newErrors.age = window.confirm("Age should be greater than or equal to 18");
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // all filled
    navigate('/templates');
  };

  // reset
  const handleReset = () => {
    const confirmReset = window.confirm("Are you sure you want to clear all data?");
    if (confirmReset) {
      clearBiodata();
      setErrors({});
    }
  };

  return (
    <div>
      {/* top header area */}

      <div className="text-center py-6">
        <h1 className="text-center text-2xl font-bold text-orange-600">
          Start building Biodata
        </h1>
        <p className="text-center text-gray-500 mb-4">Fill All Information for Best Marriage Biodata</p>
        <div className="flex justify-center gap-2 mt-4">
          {['en','ml','ta','hi'].map((lng) => {
            const languageNames = { en: 'English', ml: 'Malayalam', ta: 'Tamil', hi: 'Hindi' };
            return (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`px-4 py-2 rounded-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition ${
                  i18n.language === lng ? 'bg-orange-600 text-white' : ''
                } cursor-pointer`}
              >
                {languageNames[lng]}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row min-h-screen">

      {/* left form */}
      <FormData formData={biodata} errors={errors}
        handleInput={handleInput} handleSubmit={handleSubmit} handleReset={handleReset} />

      {/* right preview */}
      <LivePreview formData={biodata} />

    </div>
  </div>
  );
};

export default PersonalDetails;