import { useState } from 'react';
import useCurrencyInfo from './Hooks/useCurrecnyInfo';
import CurrencyDropdown from './CurrencyDropdown';

function App() {
  
  const [selectCurrency,onCurrencyChange]=useState('inr');

  const currencyInfo=useCurrencyInfo(selectCurrency);
  console.log(currencyInfo);
  const currencyOptions=Object.keys(currencyInfo);
  console.log(currencyOptions);


  return (
    <>
      <select value={selectCurrency}
      onChange={(e)=>onCurrencyChange(e.target.value)}>
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
