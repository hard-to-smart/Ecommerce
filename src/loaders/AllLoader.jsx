import axios from "axios"
import { getConversionRate } from "../constants/apiUrls";


export const fetchAPI= async(url) => {
    try{
        const response = await axios.get(url);
        return response.data
    }
    catch(error){
        console.log(error)
        return error
    }
}

export const fetchCurrencyRate = async(countryrate)=>{
    try{
        const url = URL(getConversionRate + countryrate)
        const response = await axios.get(url);
        return response.data
    }
    catch(error){
        console.log(error)
        return error
    }
}