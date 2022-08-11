import React from 'react';
import {Link} from "react-router-dom";
import {FaSun, FaMoon} from "react-icons/fa/index";
import { useGlobalContext } from '../../context';
import './navbar.css'


const Navbar = () => {
  const {theme, toggleTheme} = useGlobalContext()
  return (
    <nav>
      <Link to='/'>Where in the world?</Link>
      <div className='nav-theme'>
        {
          theme === "light" ? <FaSun className="theme-icon icon" onClick={toggleTheme} />
          :
          <FaMoon className="theme-icon icon" onClick={toggleTheme}/>
        }
        <span>{theme} mode</span>
      </div>
    </nav>
  )
}

export default Navbar