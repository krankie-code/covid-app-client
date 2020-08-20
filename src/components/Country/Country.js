import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './Country.module.css'

import { getCountries } from '../../api'


const Country = ({ handleCountryChange }) => {
const [fetchedCountries, setFetchedCountries] = useState([]);

useEffect(()=>{
    const fetchCountries = async () => {
        setFetchedCountries(await getCountries())
    }
    fetchCountries();
},[setFetchedCountries])
/* console.log(fetchedCountries) */

    return (
        <div>
            <FormControl className = {styles.formControl}>
                <h2 >Select a country</h2>
                <NativeSelect defaultValue ='' onChange ={(e)=>{handleCountryChange(e.target.value)}}>
                    <option value = 'global'>Global</option>
                    {fetchedCountries.map((country,i) => <option value={country} key={i}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default Country