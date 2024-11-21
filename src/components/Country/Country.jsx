import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setvisited] = useState(false);


    const handleVisited = () => {
        setvisited(!visited);
    }

    // console.log(handleVisitedCountry)

    return (
        <div className={`country ${visited ? 'visited' : 'nonvisited'}`}>
            <h3><span style={{color:"red"}}>Name : </span>{name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area} </p>
            <p>Code : {cca3} </p>
            <button onClick={() => handleVisitedCountry(country)}
            style={{backgroundColor:"lightcoral", color:'white', marginBottom:"20px"}} >Mark Visited</button><br />
            <button style={{backgroundColor:"lightcoral", color:'white', marginBottom:"20px"}}
            onClick={() => handleVisitedFlags(country.flags.png)} >add flags</button>
            <br />
            <button style={{backgroundColor:"lightcoral", color:'white', marginBottom:"20px"}} 
            onClick={handleVisited} > {visited ? "Visited" : "Going"}</button>
            {visited ? "I have visited this country." : "I want to visit"}
            <hr />
            <CountryDetail
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;