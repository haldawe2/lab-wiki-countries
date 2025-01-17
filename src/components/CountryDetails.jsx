import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CountryDetails = ({ countries }) => {

    const { countryCode } = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        const target = countries.find(elem => elem.alpha3Code === countryCode)
        setCountry(target);
        setLoading(false);
    }, [countryCode, countries])

    return (
        <>
                {!loading && country && 
                <div className="col-7">
                    <h1>{country.name.common}</h1>
                    <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                            <sup>2</sup>
                        </td>
                        </tr>
                        <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                            {country.borders.map(border => {
                               return <li key={border}><Link to={`/${border}`}>{countries.find(elem => elem.alpha3Code === border).name.common}</Link></li> 
                            })}
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>}            
        </>

    )
}

export default CountryDetails