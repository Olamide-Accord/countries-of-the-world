import React from 'react';
import {HiSearch} from "react-icons/hi/index"
import { useGlobalContext } from '../../context';
import {IoIosArrowDown} from "react-icons/io/index"
import "./search-bar.css"

const SearchBar = () => {
  const {searchTerm, editSearchTerm, handleSubmit, dropdown, toggleDropdown, filterRegion} = useGlobalContext()
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <HiSearch className='input-icon icon'/>
          <input 
            type="text"
            placeholder='Search for a country...'
            value={searchTerm}
            onChange={editSearchTerm}
            />
        </div>
      </form>
      <div className='input-div' id='dropdown-container'>
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
  )
}

export default SearchBar