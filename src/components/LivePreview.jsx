import React from "react";
import { useTranslation } from "react-i18next";

const LivePreview = ({ formData }) => {

    const { t } = useTranslation();

    const hasPersonal = ['name','gender','dob','age','height','religion','caste','motherTongue','maritalStatus','nationality'].some(k => formData[k]);
    const hasFamily = ['fatherName','fatherOccupation','motherName','motherOccupation','totalBrothers','totalSisters','nativePlace'].some(k=>formData[k]);
    const hasEducation = ['education','occupation','income'].some(k=>formData[k]);
    const hasContact = ['contactNumber','contactEmail'].some(k=>formData[k]);
    const hasHoroscope = ['timeOfBirth','placeOfBirth','rashi','nakshatra'].some(k=>formData[k]);

  return (
    <div className="w-full md:w-1/2 p-3 md:h-screen overflow-y-auto">
        <div className="border-2 border-gray-300 p-4 h-full relative mx-auto text-sm" style={{ maxWidth: '500px' }}>
          <h2 className="text-center">Biodata</h2>
          
          {/* Profile img preview */}

          <div className="absolute top-24 right-14 w-21 h-22 border border-gray-400 flex items-center justify-center">
            {formData.photo ? (
              <img src={formData.photo} alt="photo" className="max-w-full max-h-full" />
            ) : (
              <span className="text-xs text-gray-500 text-center">Your Photo</span>
            )}
          </div>

          {!hasPersonal && !hasFamily && !hasEducation && !hasContact && !hasHoroscope && (
            <p className="text-center mt-50 md:mt-60 mb-20 text-lg text-gray-400">Here preview of your biodata will display</p>
          )}
          <div className="text-xs">
            {hasPersonal && (
              <div>
                {formData.name && <h1 className='font-bold text-lg text-center'>{formData.name}</h1>}
                <h3 className="font-bold mt-2 text-orange-600">{t('personalDetails')}</h3>
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
                <h3 className="font-bold mt-2 text-orange-600">{t('familyBackgroundDetails')}</h3>
                <ul className="ml-2">
                  {formData.fatherName && <li><strong>{t('fatherName')}:</strong> {formData.fatherName}</li>}
                  {formData.fatherOccupation && <li><strong>{t('fatherOccupation')}:</strong> {formData.fatherOccupation}</li>}
                  {formData.motherName && <li><strong>{t('motherName')}:</strong> {formData.motherName}</li>}
                  {formData.motherOccupation && <li><strong>{t('motherOccupation')}:</strong> {formData.motherOccupation}</li>}
                  {formData.totalBrothers && <li><strong>{t('totalBrothers')}:</strong> {formData.totalBrothers}</li>}
                  {formData.totalSisters && <li><strong>{t('totalSisters')}:</strong> {formData.totalSisters}</li>}
                  {formData.nativePlace && <li><strong>{t('nativePlaceResidence')}:</strong> {formData.nativePlace}</li>}
                </ul>
              </div>
            )}
            {hasEducation && (
              <div>
                <h3 className="font-bold mt-2 text-orange-600">{t('educationProfessionalDetails')}</h3>
                <ul className="ml-2">
                  {formData.education && <li><strong>{t('education')}:</strong> {formData.education}</li>}
                  {formData.occupation && <li><strong>{t('occupation')}:</strong> {formData.occupation}</li>}
                  {formData.income && <li><strong>{t('income')}:</strong> ₹{Number(formData.income).toLocaleString('en-IN')}</li>}
                </ul>
              </div>
            )}
            {hasContact && (
              <div>
                <h3 className="font-bold mt-2 text-orange-600">{t('contactDetails')}</h3>
                <ul className="ml-2">
                  {formData.contactNumber && <li><strong>{t('contactNumber')}:</strong> {formData.contactNumber}</li>}
                  {formData.contactEmail && <li><strong>{t('contactEmail')}:</strong> {formData.contactEmail}</li>}
                </ul>
              </div>
            )}
            {hasHoroscope && (
              <div className='mt-2 mb-8 md:mb-0'>
                {
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
  )
}

export default LivePreview