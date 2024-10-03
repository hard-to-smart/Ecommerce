import axios from "axios"


export const fetchAPI= async(url)=> {
    try{
        const response = await axios.get(url);
        return response.data
    }
    catch(error){
        console.log(error)
        return error
    }
}