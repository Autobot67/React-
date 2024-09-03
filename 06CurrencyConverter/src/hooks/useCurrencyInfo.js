import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/
            currency-api@1/latest/currencies/${currency}.
            json`)
            .then((res) => res.json())
            .then((res) =>{
                // Make sure the API returns the correct structure
                const currencyData = res[currency];
                if (currencyData) {
                    setData(currencyData);
                } else {
                    console.error(`No data found for currency: ${currency}`);
                }
            })
            .catch(err => console.error("Error fetching currency data:", err));
        },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;