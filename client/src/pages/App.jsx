import React, { useState } from 'react';
import ResetButton from '../components/ResetButton';
import EarningsInput from '../components/EarningsInput';
import DeductionsInput from '../components/Deductionsinput';
import '../styles/App.css';

function App() {
  const [basicSalary, setBasicSalary] = useState('');
  const [earnings, setEarnings] = useState([{ earningType: '', earningValue: '', epfChecked: false }]);
  const [deductions, setDeductions] = useState([{ deductionType: '', deductionValue: '' }]);

  const handleBasicSalaryChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setBasicSalary(value);
    }
  };

  const handleEarningReset = () => {
    setEarnings([{ earningType: '', earningValue: '', epfChecked: false }]);
  };

  const handleDeductionReset = () => {
    setDeductions([{ deductionType: '', deductionValue: '' }]);
  };

  const handleReset = () => {
    setBasicSalary('');
    handleEarningReset();
    handleDeductionReset();
  };

  const handleSubmit = () => {
    // Calculate total earnings
    const totalEarnings = parseInt(basicSalary) + earnings.reduce((acc, curr) => acc + parseInt(curr.earningValue), 0);
  
    // Calculate total earnings for EPF
    const totalEarningsForEPF = parseInt(basicSalary) + earnings.filter(earning => earning.epfChecked).reduce((acc, curr) => acc + parseInt(curr.earningValue), 0);
  
    // Calculate gross deduction
    const grossDeduction = deductions.reduce((acc, curr) => acc + parseInt(curr.deductionValue), 0);
  
    // Calculate gross earnings
    const grossEarnings = totalEarnings - grossDeduction;
  
    // Calculate gross salary for EPF
    const grossSalaryForEPF = totalEarningsForEPF - grossDeduction;
  
    // Calculate employee EPF
    const employeeEPF = grossSalaryForEPF * 0.08;
  
    // Calculate employer EPF
    const employerEPF = grossSalaryForEPF * 0.12;
  
    // Calculate employer ETF
    const employerETF = grossSalaryForEPF * 0.03;
  
    // Calculate APIT
    const APIT = (grossEarnings * 0.18) - 25500;
  
    // Calculate net salary
    const netSalary = grossEarnings - employeeEPF - APIT;
  
    // Calculate cost to company
    const costToCompany = grossEarnings + employerEPF + employerETF;
  
    // Display the results in a popup page
    const resultPopup = window.open('', '_blank', 'width=600,height=400');
    resultPopup.document.write(`
      <h1>Salary Calculation Results</h1>
      <p>Total Earnings = Basic Salary + Earnings</p>
      <p>= ${basicSalary} + ${earnings.reduce((acc, curr) => acc + parseInt(curr.earningValue), 0)}</p>
      <p>= ${totalEarnings}</p>
      <p>Total Earnings for EPF = Basic Salary + Sum of EPF/ETF Allowed Earnings</p>
      <p>= ${basicSalary} + ${earnings.filter(earning => earning.epfChecked).reduce((acc, curr) => acc + parseInt(curr.earningValue), 0)}</p>
      <p>= ${totalEarningsForEPF}</p>
      <p>Gross Deduction = Sum of Deductions</p>
      <p>= ${grossDeduction}</p>
      <p>Gross Earnings = Total Earnings - Gross Deduction</p>
      <p>= ${totalEarnings} - ${grossDeduction}</p>
      <p>= ${grossEarnings}</p>
      <p>Gross Salary for EPF = Total Earnings for EPF - Gross Deduction</p>
      <p>= ${totalEarningsForEPF} - ${grossDeduction}</p>
      <p>= ${grossSalaryForEPF}</p>
      <p>Employee EPF (8%) = Gross Salary for EPF X 8%</p>
      <p>= ${grossSalaryForEPF} X 8%</p>
      <p>= ${employeeEPF}</p>
      <p>Employer EPF (12%) = Gross Salary for EPF X 12%</p>
      <p>= ${grossSalaryForEPF} X 12%</p>
      <p>= ${employerEPF}</p>
      <p>Employer ETF (3%) = Gross Salary for EPF X 3%</p>
      <p>= ${grossSalaryForEPF} X 3%</p>
      <p>= ${employerETF}</p>
      <p>APIT = (Gross Earnings * Tax Percentage) - constant</p>
      <p>= (${grossEarnings} * 18%) - 25,500</p>
      <p>= ${APIT}</p>
      <p>Net Salary = Gross Earnings - Employee EPF - APIT</p>
      <p>= ${grossEarnings} - ${employeeEPF} - ${APIT}</p>
      <p>= ${netSalary}</p>
      <p>Cost To Company = Gross Earnings + Employer EPF (12%) + Employer ETF (3%)</p>
      <p>= ${grossEarnings} + ${employerEPF} + ${employerETF}</p>
      <p>= ${costToCompany}</p>
    `);
  };
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative bg-white border border-gray-300 p-10 shadow-sm rounded-md">
        <div className="mt-4 text-right">
          <ResetButton onReset={handleReset} />
        </div>
        <h1 className="calculate-title">Calculate Your Salary</h1>
        <div className="mb-4">
          <label className="block basic-salary-label">Basic Salary</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded basic-salary-input"
            value={basicSalary}
            onChange={handleBasicSalaryChange}
            placeholder="Enter Basic Salary"
          />
        </div>
        <EarningsInput
          earnings={earnings}
          setEarnings={setEarnings}
          onReset={handleEarningReset}
        />
        <DeductionsInput
          deductions={deductions}
          setDeductions={setDeductions}
          onReset={handleDeductionReset}
        />
        <div className="mt-4 text-center">
        <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  onClick={handleSubmit}
>
  Submit
</button>
        </div>
      </div>
    </div>
  );
}

export default App;
