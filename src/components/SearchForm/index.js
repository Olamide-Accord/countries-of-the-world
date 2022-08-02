import React from 'react';
import { IoIosSearch, IoIosArrowDown } from "react-icons/io/index";
import { useGlobalContext } from '../../context';
import "./search-form.css"

const SearchForm = () => {
  const {handleSubmit, searchTerm, setSearchTerm, dropdown, toggleDropdown} = useGlobalContext()
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
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
              Filter by Region
              <IoIosArrowDown className="icon" onClick={toggleDropdown} />
            </div>
          </div>
          <div className={dropdown ? "dropdown d-block" : "dropdown d-none"}>
            <ul>
              <li>Africa</li>
              <li>Americas</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm