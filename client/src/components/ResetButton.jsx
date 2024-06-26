import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ResetButton = ({ onReset }) => {
  return (
    <button
      className="absolute top-11 right-5 text-rgba(0, 82, 234, 1) hover:rgba(0, 82, 234, 1) focus:outline-none"
      onClick={onReset}
    >
      <i className="fas fa-redo"></i> <span className="text-xs">Reset</span>
    </button>
  );
};

export default ResetButton;

