import React from 'react';

function OutputDisplay({ output }) {
  return (
    <div className="mt-8 p-6 bg-purple-50 border-l-4 border-purple-600 rounded-lg">
      <h2 className="text-xl font-semibold text-purple-700 mb-3">Generated Description:</h2>
      <div className="text-gray-800 whitespace-pre-wrap">
        {output}
      </div>
    </div>
  );
}

export default OutputDisplay;
