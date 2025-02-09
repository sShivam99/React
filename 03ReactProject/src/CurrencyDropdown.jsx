import React, { useState, useEffect } from 'react';

const CurrencyDropdown = () => {
  const [currencies, setCurrencies] = useState([]); // To store currency data
  const [selectedCurrency, setSelectedCurrency] = useState(''); // To track the selected currency
  const [loading, setLoading] = useState(true); // To show a loader while fetching data

  // Function to fetch the currency data from the API
  const fetchCurrencies = async () => {
    try {
      const response = await fetch(
        'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'
      );
      const data = await response.json();
      setCurrencies(Object.entries(data.usd)); // Convert the object to an array of key-value pairs
      setLoading(false);
    } catch (error) {
      console.error('Error fetching currencies:', error);
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchCurrencies();
  }, []);

  // Handle dropdown selection change
  const handleChange = (e) => {
    setSelectedCurrency(e.target.value);
    console.log('Selected Currency:', e.target.value);
  };

  return (
    <div>
      <h1>Currency Selector</h1>
      {loading ? (
        <p>Loading currencies...</p>
      ) : (
        <select value={selectedCurrency} onChange={handleChange}>
          <option value="" disabled>
            -- Select a Currency --
          </option>
          {currencies.map(([key, value]) => (
            <option key={key} value={key}>
              {`${key.toUpperCase()} - ${value}`}
            </option>
          ))}
        </select>
      )}
      {selectedCurrency && <p>You selected: {selectedCurrency.toUpperCase()}</p>}
    </div>
  );
};

export default CurrencyDropdown;


