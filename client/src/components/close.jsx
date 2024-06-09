import React, { useState } from 'react';
import EarningInput from './EarningsInput';

const Close = () => {
  const [showEarningInput, setShowEarningInput] = useState(true);

  const handleClose = () => {
    setShowEarningInput(false);
  };

  return (
    <div>
      {showEarningInput && <EarningInput onClose={handleClose} />}
      {}
    </div>
  );
};

export default Close;
