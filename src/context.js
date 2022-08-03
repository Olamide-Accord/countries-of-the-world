import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();
const url = "https://restcountries.com/v2/all";
const url2 = "https://restcountries.com/v2/name/";
const url3 = "https://restcountries.com/v2/alpha/bel";


const AppProvider = ({children}) => {
  const [country, setCountry] = useState([]);
  const [theme, setTheme] = useState("light");
  const [dropdown, setDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [code, setCode] = useState("")

  const toggleTheme = () => {
    setTheme((curr) => curr === "light" ? "dark"  : "light")
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }

  const fetchAll =  async() => {
    const response = await fetch(url);
    const data = await response.json();
    const allCountries = data.map((item) => {
      const {name, population, region, capital, flags} = item;
      return {
        id: population,
        name,
        population,
        region,
        capital,
        flags,
      };
    });
    setCountry(allCountries);
  }

  const searchCountry = async() => {
    const response = await fetch(`${url2}${searchTerm}`);
    const data = await response.json();
    const countriesSearch = data.map((item) => {
      const {name, population, region, capital, flags} = item;
      return{
        id: population,
        name,
        population,
        region,
        capital,
        flags
      };
    });
    setCountry(countriesSearch);
  }

  const detailCountry = async () => {
    const response = await fetch(`${url3}`);
    const data = await response.json();
    const {nativeName, population, region, subregion, capital, currencies, borders, languages, topLevelDomain} = data;
    console.log(nativeName, capital, currencies);
  }

  const filterRegion = (region) => {
    const newRegion = country.filter((item) => item.region === region);
    setCountry(newRegion);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCountry();
    setSearchTerm("");
  };

  const detailSubmit = () => {
    detailCountry()
  }

  useEffect(() => {
    fetchAll()
  }, [])
  

  return (
    <AppContext.Provider value={{
      country,
      theme,
      toggleTheme,
      searchTerm,
      setSearchTerm,
      handleSubmit,
      dropdown,
      toggleDropdown,
      detailSubmit,
      filterRegion
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}