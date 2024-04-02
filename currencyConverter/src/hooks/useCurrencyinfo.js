import { useEffect, useState } from "react";

export function useCurrencyinfo(currency){
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data)
    return data
}
export default useCurrencyinfo;
