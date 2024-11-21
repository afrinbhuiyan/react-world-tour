
const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            {/* <h5>Country Data</h5> */}
            <p><small>Capital : {country.capital}</small></p>
        </div>
    );
};

export default CountryData;