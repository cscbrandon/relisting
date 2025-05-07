import React, { useState } from 'react';

function WalkthroughNotes({ setFormData }) {
  const [notes, setNotes] = useState('');

  const handleOrganize = () => {
    const data = {
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
      characterLimit: '',
      notes,
    };
    setFormData(data);
  };

  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-gray-800">
        Type your walk-through notes below — we'll turn them into a polished listing description.
      </label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={8}
        className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-purple-300 focus:border-transparent"
        placeholder="Example: 123 Maple St, 4 bed, 3 bath, 2,500 sqft, .25 acre, Greenwood Meadows subdivision..."
      />
      <button
        onClick={handleOrganize}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition"
      >
        📝 Organize My Notes
      </button>
    </div>
  );
}

export default WalkthroughNotes;
