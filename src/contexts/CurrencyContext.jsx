import { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyContextProvider= ({children}) =>{

    const [currentCurrencyRate, setCurrentCurrencyRate] = useState('USD')

    const [currencyConversion, setCurrencyConversion] = useState({
        USD: 1,
        INR : 0,
        AUD :0
    })

    const handleCurrencyConversion = (AUDrate, INRrate) =>{
        setCurrencyConversion({...currencyConversion, INR : Number(INRrate).toFixed(2), AUD:Number(AUDrate).toFixed(2)})
    }


    const handleChangeCurrency = (currency) => {
        return setCurrentCurrencyRate(currency)   
    }

    return <CurrencyContext.Provider value={{handleChangeCurrency , currentCurrencyRate, handleCurrencyConversion, currencyConversion }}>{children}</CurrencyContext.Provider>
}