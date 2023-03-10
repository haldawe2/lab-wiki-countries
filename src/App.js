import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// eslint-disable-next-line
import countries from './countries.json'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {

  const [countriesState, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
    .then((response) => response.json())
    .then((data) => setCountries(data))
    .then(setLoading(false))
  }, [])

  return (
    <div className="App">
      <Navbar />
      {!loading && countriesState &&
      <Routes>
        <Route path='/' element={<CountriesList countries={countriesState} /> }>
          <Route path=':countryCode' element={<CountryDetails countries={countriesState} />} />
        </Route>       
      </Routes>}
    </div>
  );
}

export default App;
