import React from 'react';
import { IoIosSearch, IoIosArrowDown } from "react-icons/io/index";

import { useGlobalContext } from '../../context';
import "./search-form.css"

const SearchForm = () => {
  const {handleSubmit, searchTerm, setSearchTerm, dropdown, toggleDropdown, filterRegion, country} = useGlobalContext();


  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <div className="inputDiv" id='searchInput'>
          <div className="flex-input">
            <IoIosSearch className="icon" />
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div>
        <div className="inputDiv" id='dropdown-container'>
          <div className="dropdown-div">
            <div className="flex-dropdown">
              <div>Filter by Region</div>
              <IoIosArrowDown className="icon" onMouseDown={toggleDropdown} />
            </div>
          </div>
          <div className={dropdown ? "dropdown d-block" : "dropdown d-none"}>
            <button onClick={() => filterRegion("Africa")}>Africa</button>
            <button onClick={() => filterRegion("Americas")}>Americas</button>
            <button onClick={() => filterRegion("Asia")}>Asia</button>
            <button onClick={() => filterRegion("Europe")}>Europe</button>
            <button onClick={() => filterRegion("Oceania")}>Oceania</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm