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

export const fetchCurrencyRate = async(url) => {
    try{
        const response = await axios.get(url);
        console.log(response.data.conversion_rates)
        return response.data.conversion_rates
        
    }
    catch(error){
        console.log(error)
        return error
    }
}