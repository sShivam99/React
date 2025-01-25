import {useEffect,useState} from 'react';

function useCurrencyInfo(currency='usd')
{
    const [data,setData]=useState({usd:85});

    useEffect(() => {
       fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
       .then((resp)=>resp.json)
       .then((resp)=>setData(resp[currency]))
       .catch(()=> console.log("API request failed"));
       
    }, [currency]);
    return data;
}
export default useCurrencyInfo;