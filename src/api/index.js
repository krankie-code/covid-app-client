import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const getData = async (country) =>{
    let countryUrl = url;

    if(country){
        countryUrl = `${url}/countries/${country}`
    }
    try {
        const data  = axios.get(countryUrl);
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getCountries = async () => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`)
        return countries.map(country => country.name)

    } catch (error) {
        console.log(error)
    }
}