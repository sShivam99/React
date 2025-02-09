import { useState } from 'react';
import useCurrencyInfo from './Hooks/useCurrecnyInfo';
import CurrencyDropdown from './CurrencyDropdown';

function App() {
  
  const [selectCurrency,onCurrencyChange]=useState('inr');

  const currencyInfo=useCurrencyInfo(selectCurrency);
  console.log(currencyInfo);
  const currencyOptions=Object.keys(currencyInfo);

  const handleChange=(e)=>{
    onCurrencyChange(e.target.value);
  }
  console.log(currencyOptions);


  return (
    <>
      <select value={selectCurrency}
      onChange={handleChange}>
        {
          currencyOptions.map((currency)=>
            <option key={currency} value={currency}>{currency}</option>
          )
        }
      </select>      
    </>
  );
}

export default App
