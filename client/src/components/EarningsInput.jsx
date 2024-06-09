import React, { useState } from 'react';
import '../styles/App.css';

const EarningInput = ({ index, earning, handleEarningChange, onClose }) => (
  <div className="mt-5">
    <div className="flex items-center">
      <input
        type="text"
        className="mr-2 p-2 border border-gray-300 rounded w-1/3"
        value={earning.earningType}
        onChange={(e) => handleEarningChange(index, 'earningType', e.target.value)}
        placeholder="Earning Type"
      />
      <input
        type="text"
        className="mr-2 p-2 border border-gray-300 rounded w-1/3"
        value={earning.earningValue}
        onChange={(e) => handleEarningChange(index, 'earningValue', e.target.value)}
        placeholder="Value"
      />
      <button className="pl-1 close-button" onClick={() => onClose(index)}>
        <i className="fas fa-times"></i>
      </button>
      <div className="pl-5">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="epf"
            checked={earning.epfChecked}
            onChange={(e) => handleEarningChange(index, 'epfChecked', e.target.checked)}
          />
          <span>EPF/ETF</span>
        </label>
      </div>
    </div>
  </div>
);

const EarningsInput = () => {
  const [earnings, setEarnings] = useState([{ earningType: '', earningValue: '', epfChecked: false }]);

  const handleEarningChange = (index, field, value) => {
    const newEarnings = [...earnings];
    newEarnings[index][field] = value;
    setEarnings(newEarnings);
  };

  const handleAddMore = () => {
    setEarnings([...earnings, { earningType: '', earningValue: '', epfChecked: false }]);
  };

  const handleRemove = (index) => {
    const newEarnings = earnings.filter((_, i) => i !== index);
    setEarnings(newEarnings);
  };

  return (
    <div>
      <div className="mt-5">
        <h5 className="text-lg font-medium">Earnings</h5>
        <p className="text-gray-600">Allowance, Fixed Allowance, Bonus and etc.</p>
      </div>
      <div className="mt-5">
        {earnings.map((earning, index) => (
          <EarningInput
            key={index}
            index={index}
            earning={earning}
            handleEarningChange={handleEarningChange}
            onClose={handleRemove}
          />
        ))}
        <div className="mt-5">
          <button
            className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded"
            onClick={handleAddMore}
          >
            + Add New Allowance
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarningsInput;
