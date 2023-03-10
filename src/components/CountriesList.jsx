import { Link, Outlet } from "react-router-dom"

const CountriesList = ({ countries }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                    <div className="list-group">
                        {countries.map(country => {
                            return (
                               <Link className="list-group-item list-group-item-action" key={country.alpha3Code} to={country.alpha3Code}>
                               <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />{country.alpha2Code} {country.name.common}</Link>   
                            )
                        })}                  
                    </div>
                    
               </div>
               <Outlet />
            </div>
        </div>
    )
}

export default CountriesList