import React, { useState } from 'react';
import ResetButton from './components/ResetButton';
import EarningsInput from './components/EarningsInput';

import './styles/App.css';

import DeductionsInput from './components/Deductionsinput';

function App() {
  const [basicSalary, setBasicSalary] = useState('');

  const handleBasicSalaryChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setBasicSalary(value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative bg-white border border-gray-300 p-10 shadow-sm rounded-md">
        <ResetButton />
        <h1 className="text-2xl font-bold mb-4">Calculate Your Salary</h1>
        <div className="mb-4">
          <label className="block text-left text-lg font-medium mb-1">Basic Salary</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={basicSalary}
            onChange={handleBasicSalaryChange}
            placeholder="Enter Basic Salary"
          />
        </div>
        <EarningsInput />
        <DeductionsInput />
      </div>
    </div>
  );
}

export default App;
