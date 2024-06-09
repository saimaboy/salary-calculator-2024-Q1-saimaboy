import React, { useState } from 'react';
import '../styles/App.css';

const DeductionsInput = () => {
  const [deductionType, setDeductionType] = useState('');
  const [deductionValue, setDeductionValue] = useState('');

  const handleDeductionTypeChange = (e) => {
    setDeductionType(e.target.value);
  };

  const handleDeductionValueChange = (e) => {
    setDeductionValue(e.target.value);
  };

  return (
    <div className="mt-5">
      <div>
        <h5 className="text-lg font-medium">Deductions</h5>
        <p className="text-gray-600">Salary Advances, Loan Deductions, and all.</p>
      </div>
      <div className="mt-5">
        <div className="flex items-center">
          <input
            type="text"
            className="mr-2 p-2 border border-gray-300 rounded w-1/2"
            value={deductionType}
            onChange={handleDeductionTypeChange}
            placeholder="Deduction Type"
          />
          <input
            type="text"
            className="mr-2 p-2 border border-gray-300 rounded w-1/2"
            value={deductionValue}
            onChange={handleDeductionValueChange}
            placeholder="Value"
          />
        </div>
      </div>
    </div>
  );
};

export default DeductionsInput;
