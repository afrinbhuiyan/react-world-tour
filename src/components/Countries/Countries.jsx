import { useEffect } from 'react';
import { useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    
    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setvisitedFlags] = useState([])
    
    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data))
    }, [])
    
    const handleVisitedCountry = country => {
        console.log("add this to your visited country")
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag]
        setvisitedFlags(newVisitedFlags)
    }

    // remove item from an array in a state
    // use filter to select all the elements excepts the one you want to remove

    return (
        <div>
            <h3>Countries : {countries.length} </h3>
            {/* visited country */}
            <div>
            <h4>Visited countries : {visitedCountries.length} </h4>
             <ul>
                {
                    visitedCountries.map(country => 
                    <li key={country.cca3} >{country.name.common}</li>)
                }
             </ul>
            </div>
            {/* visited flags */}
            <div className='flag-Container'>
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag} ></img> )
                }
            </div>
            {/* display Countries */}
            <div className='country-container'>
            {
                countries.map(country => <Country
                key={country.cca3}
                handleVisitedCountry = {handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
                country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;