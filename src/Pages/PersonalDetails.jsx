import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

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

const PersonalDetails = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    age: '',
    height: '',
    religion: '',
    caste: '',
    motherTongue: '',
    maritalStatus: '',
    nationality: '',
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    siblingName: '',
    nativePlace: '',
    education: '',
    occupation: '',
    income: '',
    contactNumber: '',
    contactEmail: '',
    timeOfBirth: '',
    placeOfBirth: '',
    rashi: '',
    nakshatra: '',
    photo: null,
  });
  const [errors, setErrors] = useState({});

  // compute age when dob changes
  useEffect(() => {
    if (formData.dob) {
      const birth = new Date(formData.dob);
      const diff = Date.now() - birth.getTime();
      const ageDt = new Date(diff);
      const age = Math.abs(ageDt.getUTCFullYear() - 1970);
      setFormData((f) => ({ ...f, age: age.toString() }));
    }
  }, [formData.dob]);

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo' && files.length) {
      setFormData((f) => ({ ...f, photo: URL.createObjectURL(files[0]) }));
    } else {
      setFormData((f) => ({ ...f, [name]: value }));
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSubmit = () => {
    const required = [
      'name','gender','dob','height','religion','caste','motherTongue','maritalStatus','nationality',
      'fatherName','fatherOccupation','motherName','motherOccupation','siblingName','nativePlace',
      'education','occupation','income','contactNumber','contactEmail','photo',
    ];
    const newErrors = {};
    required.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'Please fill this field';
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // all filled
    navigate('/templates');
  };

  const hasPersonal = ['name','gender','dob','age','height','religion','caste','motherTongue','maritalStatus','nationality'].some(k => formData[k]);
  const hasFamily = ['fatherName','fatherOccupation','motherName','motherOccupation','siblingName','nativePlace'].some(k=>formData[k]);
  const hasEducation = ['education','occupation','income'].some(k=>formData[k]);
  const hasContact = ['contactNumber','contactEmail'].some(k=>formData[k]);
  const hasHoroscope = ['timeOfBirth','placeOfBirth','rashi','nakshatra'].some(k=>formData[k]);

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
      <div className="flex flex-col md:flex-row">

      {/* left form */}
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
            <div className="col-span-2">
              <label>{t('siblingName')}</label>
              <input name="siblingName" value={formData.siblingName} onChange={handleInput} placeholder={t('siblingName')} className="border p-2 rounded w-full" />
              {errors.siblingName && <p className="text-red-500 text-xs">{errors.siblingName}</p>}
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

        <div className="flex justify-end">
          <button
            className="px-6 py-2 bg-orange-600 text-white rounded cursor-pointer"
            onClick={handleSubmit}
          >
            Choose a Template
          </button>
        </div>
      </div>

      {/* right preview */}
      <div className="w-full md:w-1/2 p-3 h-screen overflow-y-auto">
        <div className="border-2 border-gray-300 p-4 h-full relative mx-auto text-sm" style={{ maxWidth: '500px' }}>
          <h2 className="text-center">Biodata</h2>
          
          {/* Profile img preview */}

          <div className="absolute top-24 right-6 w-24 h-24 border border-gray-400 flex items-center justify-center">
            {formData.photo ? (
              <img src={formData.photo} alt="photo" className="max-w-full max-h-full" />
            ) : (
              <span className="text-xs text-gray-500 text-center">Your Photo</span>
            )}
          </div>

          {!hasPersonal && !hasFamily && !hasEducation && !hasContact && !hasHoroscope && (
            <p className="text-center mt-60 text-lg text-gray-400">Here preview of your biodata will display</p>
          )}
          <div className="">
            {hasPersonal && (
              <div>
                {formData.name && <h1 className='font-bold text-xl text-center'>{formData.name}</h1>}
                <h3 className="font-bold mt-4 text-orange-600">{t('personalDetails')}</h3>
                <ul className="ml-2">
                  {formData.name && <li><strong>{t('name')}:</strong> {formData.name}</li>}
                  {formData.gender && <li><strong>{t('gender')}:</strong> {formData.gender}</li>}
                  {formData.dob && <li><strong>{t('dob')}:</strong> {formData.dob}</li>}
                  {formData.age && <li><strong>{t('age')}:</strong> {formData.age}</li>}
                  {formData.height && <li><strong>{t('height')}:</strong> {formData.height}</li>}
                  {formData.religion && <li><strong>{t('religion')}:</strong> {formData.religion}</li>}
                  {formData.caste && <li><strong>{t('caste')}:</strong> {formData.caste}</li>}
                  {formData.motherTongue && <li><strong>{t('motherTongue')}:</strong> {formData.motherTongue}</li>}
                  {formData.maritalStatus && <li><strong>{t('maritalStatus')}:</strong> {formData.maritalStatus}</li>}
                  {formData.nationality && <li><strong>{t('nationality')}:</strong> {formData.nationality}</li>}
                </ul>
              </div>
            )}
            {hasFamily && (
              <div>
                <h3 className="font-bold text-orange-600">{t('familyBackgroundDetails')}</h3>
                <ul className="ml-2">
                  {formData.fatherName && <li><strong>{t('fatherName')}:</strong> {formData.fatherName}</li>}
                  {formData.fatherOccupation && <li><strong>{t('fatherOccupation')}:</strong> {formData.fatherOccupation}</li>}
                  {formData.motherName && <li><strong>{t('motherName')}:</strong> {formData.motherName}</li>}
                  {formData.motherOccupation && <li><strong>{t('motherOccupation')}:</strong> {formData.motherOccupation}</li>}
                  {formData.siblingName && <li><strong>{t('siblingName')}:</strong> {formData.siblingName}</li>}
                  {formData.nativePlace && <li><strong>{t('nativePlaceResidence')}:</strong> {formData.nativePlace}</li>}
                </ul>
              </div>
            )}
            {hasEducation && (
              <div>
                <h3 className="font-bold text-orange-600">{t('educationProfessionalDetails')}</h3>
                <ul className="ml-2">
                  {formData.education && <li><strong>{t('education')}:</strong> {formData.education}</li>}
                  {formData.occupation && <li><strong>{t('occupation')}:</strong> {formData.occupation}</li>}
                  {formData.income && <li><strong>{t('income')}:</strong> ₹{Number(formData.income).toLocaleString('en-IN')}</li>}
                </ul>
              </div>
            )}
            {hasContact && (
              <div>
                <h3 className="font-bold text-orange-600">{t('contactDetails')}</h3>
                <ul className="ml-2">
                  {formData.contactNumber && <li><strong>{t('contactNumber')}:</strong> {formData.contactNumber}</li>}
                  {formData.contactEmail && <li><strong>{t('contactEmail')}:</strong> {formData.contactEmail}</li>}
                </ul>
              </div>
            )}
            {hasHoroscope && (
              <div>
                {
                  // remove optional hint from preview heading
                  (() => {
                    const label = t('horoscopeDetails');
                    const clean = label.replace(/\s*\([^)]*\)\s*$/, '');
                    return <h3 className="font-bold text-orange-600">{clean}</h3>;
                  })()
                }
                <ul className="ml-2">
                  {formData.timeOfBirth && <li><strong>{t('timeOfBirth')}:</strong> {formData.timeOfBirth}</li>}
                  {formData.placeOfBirth && <li><strong>{t('placeOfBirth')}:</strong> {formData.placeOfBirth}</li>}
                  {formData.rashi && <li><strong>{t('rashi')}:</strong> {formData.rashi}</li>}
                  {formData.nakshatra && <li><strong>{t('nakshatra')}:</strong> {formData.nakshatra}</li>}
                </ul>
              </div>
            )}

          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
            Generated by ShaadiBio
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PersonalDetails;