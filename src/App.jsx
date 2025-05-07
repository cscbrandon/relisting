import React from 'react';
import ListingForm from './components/ListingForm';
import OutputDisplay from './components/OutputDisplay';
import WalkthroughNotes from './components/WalkthroughNotes';

function App() {
  const [formData, setFormData] = React.useState(null);
  const [output, setOutput] = React.useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Listing Description Generator
        </h1>
        {!formData ? (
          <WalkthroughNotes setFormData={setFormData} />
        ) : (
          <>
            <ListingForm setOutput={setOutput} initialData={formData} />
            {output && <OutputDisplay output={output} />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
