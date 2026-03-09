import React from "react";
import { useTranslation } from "react-i18next";

// option arrays
const genderOptions = ['Male', 'Female', 'Others'];
const motherTongueOptions = ['Malayalam', 'Tamil', 'Hindi'];
const maritalOptions = ['Single', 'Divorced', 'Widower', 'Widow'];
const rashiOptions = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
];
const nakshatraOptions = [
  'Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushya',
  'Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati',
  'Vishakha','Anuradha','Jyeshtha','Mula','Purva Ashadha','Uttara Ashadha',
  'Shravana','Dhanishta','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati',
];

const FormData = ({ formData, errors, handleInput, handleSubmit, handleReset }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full md:w-1/2 p-6 md:overflow-y-auto md:h-screen">

        {/* personal details section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            {t('personalDetails')}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>{t('name')}</label>
              <input name="name" value={formData.name} onChange={handleInput} placeholder={t('name')} className="border p-2 rounded w-full" />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
            <div>
              <label>{t('gender')}</label>
              <select name="gender" value={formData.gender} onChange={handleInput} className="border p-2 rounded w-full">
                <option value="" />
                {genderOptions.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
            </div>
            <div>
              <label>{t('dob')}</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleInput} className="border p-2 rounded w-full" />
              {errors.dob && <p className="text-red-500 text-xs">{errors.dob}</p>}
            </div>
            <div>
              <label>{t('age')}</label>
              <input name="age" value={formData.age} readOnly className="border p-2 rounded w-full" />
              {errors.age && ( <p className="text-red-500 text-xs">{errors.age}</p> )}
            </div>
            <div>
              <label>{t('height')}</label>
              <input name="height" value={formData.height} onChange={handleInput} placeholder="Eg: 4 Feet 8 Inch" className="border p-2 rounded w-full" />
              {errors.height && <p className="text-red-500 text-xs">{errors.height}</p>}
            </div>
            <div>
              <label>{t('religion')}</label>
              <input name="religion" value={formData.religion} onChange={handleInput} placeholder={t('religion')} className="border p-2 rounded w-full" />
              {errors.religion && <p className="text-red-500 text-xs">{errors.religion}</p>}
            </div>
            <div>
              <label>{t('caste')}</label>
              <input name="caste" value={formData.caste} onChange={handleInput} placeholder={t('caste')} className="border p-2 rounded w-full" />
              {errors.caste && <p className="text-red-500 text-xs">{errors.caste}</p>}
            </div>
            <div>
              <label>{t('motherTongue')}</label>
              <select name="motherTongue" value={formData.motherTongue} onChange={handleInput} className="border p-2 rounded w-full">
                <option value="" />
                {motherTongueOptions.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
              {errors.motherTongue && <p className="text-red-500 text-xs">{errors.motherTongue}</p>}
            </div>
            <div>
              <label>{t('maritalStatus')}</label>
              <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInput} className="border p-2 rounded w-full">
                <option value="" />
                {maritalOptions.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
              {errors.maritalStatus && <p className="text-red-500 text-xs">{errors.maritalStatus}</p>}
            </div>
            <div>
              <label>{t('nationality')}</label>
              <input name="nationality" value={formData.nationality} onChange={handleInput} placeholder={t('nationality')} className="border p-2 rounded w-full" />
              {errors.nationality && <p className="text-red-500 text-xs">{errors.nationality}</p>}
            </div>
          </div>
        </div>

        {/* family details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            {t('familyBackgroundDetails')}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>{t('fatherName')}</label>
              <input name="fatherName" value={formData.fatherName} onChange={handleInput} placeholder={t('fatherName')} className="border p-2 rounded w-full" />
              {errors.fatherName && <p className="text-red-500 text-xs">{errors.fatherName}</p>}
            </div>
            <div>
              <label>{t('fatherOccupation')}</label>
              <input name="fatherOccupation" value={formData.fatherOccupation} onChange={handleInput} placeholder={t('fatherOccupation')} className="border p-2 rounded w-full" />
              {errors.fatherOccupation && <p className="text-red-500 text-xs">{errors.fatherOccupation}</p>}
            </div>
            <div>
              <label>{t('motherName')}</label>
              <input name="motherName" value={formData.motherName} onChange={handleInput} placeholder={t('motherName')} className="border p-2 rounded w-full" />
              {errors.motherName && <p className="text-red-500 text-xs">{errors.motherName}</p>}
            </div>
            <div>
              <label>{t('motherOccupation')}</label>
              <input name="motherOccupation" value={formData.motherOccupation} onChange={handleInput} placeholder={t('motherOccupation')} className="border p-2 rounded w-full" />
              {errors.motherOccupation && <p className="text-red-500 text-xs">{errors.motherOccupation}</p>}
            </div>
            <div>
              <label>{t('totalBrothers')}</label>
              <input type="number" name="totalBrothers" value={formData.totalBrothers} min="0" onChange={handleInput} placeholder={t('totalBrothers')} className="border p-2 rounded w-full" />
              {errors.totalBrothers && ( <p className="text-red-500 text-xs">{errors.totalBrothers}</p> )}
            </div>
            <div>
              <label>{t('totalSisters')}</label>
              <input type="number" name="totalSisters" value={formData.totalSisters} min="0" onChange={handleInput} placeholder={t('totalSisters')} className="border p-2 rounded w-full" />
              {errors.totalSisters && ( <p className="text-red-500 text-xs">{errors.totalSisters}</p> )}
            </div>
            <div className="col-span-2">
              <label>{t('nativePlaceResidence')}</label>
              <input name="nativePlace" value={formData.nativePlace} onChange={handleInput} placeholder={t('nativePlaceResidence')} className="border p-2 rounded w-full" />
              {errors.nativePlace && <p className="text-red-500 text-xs">{errors.nativePlace}</p>}
            </div>
          </div>
        </div>

        {/* education & professional */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            {t('educationProfessionalDetails')}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>{t('education')}</label>
              <input name="education" value={formData.education} onChange={handleInput} placeholder={t('education')} className="border p-2 rounded w-full" />
              {errors.education && <p className="text-red-500 text-xs">{errors.education}</p>}
            </div>
            <div>
              <label>{t('occupation')}</label>
              <input name="occupation" value={formData.occupation} onChange={handleInput} placeholder={t('occupation')} className="border p-2 rounded w-full" />
              {errors.occupation && <p className="text-red-500 text-xs">{errors.occupation}</p>}
            </div>
            <div>
              <label>{t('income')}</label>
              <input name="income" type='text' value={formData.income} onChange={handleInput} placeholder="Eg: ₹50,000/month or 4 LPA" className="border p-2 rounded w-full" />
              {errors.income && <p className="text-red-500 text-xs">{errors.income}</p>}
            </div>
          </div>
        </div>
        {/* contact details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            {t('contactDetails')}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>{t('contactNumber')}</label>
              <input name="contactNumber" value={formData.contactNumber} onChange={handleInput} placeholder={t('contactNumber')} className="border p-2 rounded w-full" />
              {errors.contactNumber && <p className="text-red-500 text-xs">{errors.contactNumber}</p>}
            </div>
            <div>
              <label>{t('contactEmail')}</label>
              <input name="contactEmail" value={formData.contactEmail} onChange={handleInput} placeholder={t('contactEmail')} className="border p-2 rounded w-full" />
              {errors.contactEmail && <p className="text-red-500 text-xs">{errors.contactEmail}</p>}
            </div>
          </div>
        </div>

        {/* horoscope details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            {t('horoscopeDetails')}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>{t('timeOfBirth')}</label>
              <input type="time" name="timeOfBirth" value={formData.timeOfBirth} onChange={handleInput} className="border p-2 rounded w-full" />
              {errors.timeOfBirth && <p className="text-red-500 text-xs">{errors.timeOfBirth}</p>}
            </div>
            <div>
              <label>{t('placeOfBirth')}</label>
              <input name="placeOfBirth" value={formData.placeOfBirth} onChange={handleInput} placeholder={t('placeOfBirth')} className="border p-2 rounded w-full" />
              {errors.placeOfBirth && <p className="text-red-500 text-xs">{errors.placeOfBirth}</p>}
            </div>
            <div>
              <label>{t('rashi')}</label>
              <select name="rashi" value={formData.rashi} onChange={handleInput} className="border p-2 rounded w-full">
                <option value="" />
                {rashiOptions.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
              {errors.rashi && <p className="text-red-500 text-xs">{errors.rashi}</p>}
            </div>
            <div>
              <label>{t('nakshatra')}</label>
              <select name="nakshatra" value={formData.nakshatra} onChange={handleInput} className="border p-2 rounded w-full">
                <option value="" />
                {nakshatraOptions.map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
              {errors.nakshatra && <p className="text-red-500 text-xs">{errors.nakshatra}</p>}
            </div>
            <div className="col-span-2">
              <label className="block text-center p-4 border-dashed border-2 border-gray-400 rounded cursor-pointer">
                {t('photoUpload')}
                <input type="file" name="photo" accept="image/*" onChange={handleInput} className="hidden" />
              </label>
              {errors.photo && <p className="text-red-500 text-xs">Please Upload an Image</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
            <button
                className="px-6 py-2 border border-orange-600 text-orange-600 font-bold rounded cursor-pointer"
                onClick={handleReset}>
                Reset
            </button>

            <button
                className="px-6 py-2 bg-orange-600 text-white rounded cursor-pointer"
                onClick={handleSubmit} >
                Choose a Template
            </button>
        </div>

    </div>
  );
};

export default FormData;