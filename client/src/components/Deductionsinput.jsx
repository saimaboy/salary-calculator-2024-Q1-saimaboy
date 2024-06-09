import React, { useState } from 'react';
import '../styles/App.css';

const DeductionInput = ({ index, deduction, handleDeductionChange, onClose }) => (
  <div className="mt-5">
    <div className="flex items-center">
      <input
        type="text"
        className="mr-2 p-2 border border-gray-300 rounded w-1/3"
        value={deduction.deductionType}
        onChange={(e) => handleDeductionChange(index, 'deductionType', e.target.value)}
        placeholder="Deduction Type"
      />
      <input
        type="text"
        className="mr-2 p-2 border border-gray-300 rounded w-1/3"
        value={deduction.deductionValue}
        onChange={(e) => handleDeductionChange(index, 'deductionValue', e.target.value)}
        placeholder="Value"
      />
      <button className="pl-1 close-button" onClick={() => onClose(index)}>
        <i className="fas fa-times"></i>
      </button>
   
    </div>
  </div>
);

const DeductionsInput = () => {
  const [deductions, setDeductions] = useState([{ deductionType: '', deductionValue: '' }]);

  const handleDeductionChange = (index, field, value) => {
    const newDeductions = [...deductions];
    newDeductions[index][field] = value;
    setDeductions(newDeductions);
  };

  const handleAddMore = () => {
    setDeductions([...deductions, { deductionType: '', deductionValue: '' }]);
  };

  const handleRemove = (index) => {
    const newDeductions = deductions.filter((_, i) => i !== index);
    setDeductions(newDeductions);
  };

  return (
    <div>
      <div className="mt-5">
        <h5 className="text-lg font-medium deduction-label">Deductions</h5>
        <p className="text-gray-600 deduction-description">Taxes, Insurance, and other deductions.</p>
      </div>
      <div className="mt-5 DeductionsInput">
        {deductions.map((deduction, index) => (
          <DeductionInput
            key={index}
            index={index}
            deduction={deduction}
            handleDeductionChange={handleDeductionChange}
            onClose={handleRemove}
          />
        ))}
        <div className="mt-5">
          <button
            className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded"
            onClick={handleAddMore}
          >
            + Add New Deduction
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeductionsInput;
