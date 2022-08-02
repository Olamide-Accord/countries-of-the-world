import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const url = "https://restcountries.com/v2/all";
const url2 = "https://restcountries.com/v2/name/";
const url3 = "https://restcountries.com/v2/alpha/col"

const AppProvider = ({children}) => {
  const [theme, setTheme] = useState("light");
  const [country, setCountry] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [singleCountry, setSingleCountry] = useState([])

  const [dropdown, setDropdown] = useState(false)

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }

  const fetchCountry = async() => {
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
      }
    });
    setSingleCountry(countriesSearch)
  }

  const fetchAll = async() => {
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
    console.log(url3);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    fetchCountry();
    setSearchTerm("");
  };

  useEffect(() => {
    fetchAll()
  }, [])
  

  return (
    <AppContext.Provider value={{
      theme,
      toggleTheme,
      country,
      handleSubmit,
      searchTerm, 
      setSearchTerm,
      dropdown,
      toggleDropdown,
      singleCountry
    }}>
      {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}