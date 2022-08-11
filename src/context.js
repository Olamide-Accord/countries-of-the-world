import React, { useContext, createContext, useEffect, useState } from 'react';


const AppContext = createContext();

const url = "https://restcountries.com/v2/all";
const url2 = "https://restcountries.com/v2/name/";

const AppProvider = ({children}) => {
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }

  const toggleTheme = () => {
    setTheme((curr) => curr === "light" ? "dark" : "light")
  }

  const editSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  }

  const fetchCountries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const allCountries = data.map((country) => {
      const {name, region, population, capital,   flags, subregion, borders, languages,  topLevelDomain, currencies, nativeName} = country;
      return{
        id: population,
        name,
        region,
        capital,
        img: flags,
        population,
        borders,
        languages,
        currencies,
        subregion,
        nativeName,
        topLevelDomain,
      }
    });
    setCountries(allCountries);
  }

  const searchCountry = async() => {
    const response = await fetch(`${url2}${searchTerm}`);
    const data = await response.json();
    const allCountries = data.map((country) => {
      const {name, region, population, capital, flags, subregion, borders, languages,  topLevelDomain, currencies, nativeName} = country;
      return{
        id: population,
        name,
        region,
        capital,
        img: flags,
        population,
        borders,
        languages,
        currencies,
        subregion,
        nativeName,
        topLevelDomain,
      }
    });
    setCountries(allCountries);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCountry()
    setSearchTerm("")
  }

  const filterRegion = (region) => {
    const country = countries.filter((item) => item.region === region);
    setCountries(country);
  }

  useEffect(() => {
    fetchCountries()
  }, [])
  

  return (
    <AppContext.Provider value={{
      theme,
      toggleTheme,
      searchTerm,
      editSearchTerm,
      countries,
      handleSubmit,
      filterRegion,
      dropdown,
      toggleDropdown,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export default AppProvider;