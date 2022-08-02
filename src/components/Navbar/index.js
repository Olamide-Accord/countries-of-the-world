import React from 'react';
import {Link} from "react-router-dom"
import "./navbar.css";
import {BsFillMoonFill} from "react-icons/bs/index"
import { useGlobalContext } from '../../context';

const Navbar = () => {
  const {theme, toggleTheme} = useGlobalContext();
  return (
    <nav className="navbar">
      <Link to="/">Where in the world?</Link>
      <div className='nav-div' onClick={toggleTheme}>
        <BsFillMoonFill className='icon' />
        <span>{theme} mode</span>
      </div>
    </nav>
  );
}

export default Navbar