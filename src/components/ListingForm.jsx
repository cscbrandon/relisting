import React, { useState, useEffect } from 'react';

function ListingForm({ setOutput, initialData }) {
  const [formData, setFormData] = useState({
    address: '',
    neighborhood: '',
    sqft: '',
    landArea: '',
    propertyType: '',
    beds: '',
    baths: '',
    interiorFeatures: '',
    exteriorFeatures: '',
    upgrades: '',
    tone: 'Professional',
    lifestyleKeywords: '',
    buyerType: '',
    callToAction: false,
    characterLimit: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    setOutput(data.description);
  };

  const inputClass = "w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-purple-300 focus:border-transparent";

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Info</h2>
      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <label className="block font-medium text-gray-700">Address</label>
        <input name="address" value={formData.address} onChange={handleChange} className={inputClass} />

        <label className="block font-medium text-gray-700">Neighborhood / Subdivision</label>
        <input name="neighborhood" value={formData.neighborhood} onChange={handleChange} className={inputClass} placeholder="Optional" />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Square Footage</label>
            <input name="sqft" value={formData.sqft} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Land Area</label>
            <input name="landArea" value={formData.landArea} onChange={handleChange} className={inputClass} placeholder="e.g. 0.25 acre" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Bedrooms</label>
            <input name="beds" value={formData.beds} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Bathrooms</label>
            <input name="baths" value={formData.baths} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        <label className="block font-medium text-gray-700">Interior Features</label>
        <input name="interiorFeatures" value={formData.interiorFeatures} onChange={handleChange} className={inputClass} />

        <label className="block font-medium text-gray-700">Exterior Features</label>
        <input name="exteriorFeatures" value={formData.exteriorFeatures} onChange={handleChange} className={inputClass} />

        <label className="block font-medium text-gray-700">Upgrades / Highlights</label>
        <input name="upgrades" value={formData.upgrades} onChange={handleChange} className={inputClass} />

        <label className="block font-medium text-gray-700">Tone of Voice</label>
        <select name="tone" value={formData.tone} onChange={handleChange} className={inputClass}>
          <option>Professional</option>
          <option>Luxury</option>
          <option>Friendly</option>
          <option>Investor-focused</option>
          <option>Fun</option>
        </select>

        <label className="inline-flex items-center mt-2">
          <input type="checkbox" name="callToAction" checked={formData.callToAction} onChange={handleChange} className="mr-2" /> Include Call to Action
        </label>

        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition">
          ✨ Generate Description
        </button>
      </form>
    </>
  );
}

export default ListingForm;
