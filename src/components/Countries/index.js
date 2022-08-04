import React from 'react';
import {Link, } from"react-router-dom";
import { useGlobalContext } from '../../context';
import "./countries.css"

const Countries = () => {
  const {country} = useGlobalContext();
  
  return (
    <div className="countries">
      <div className="box-container">
        {country.map((item, index) => {
          const {id, name, region, capital, flags} = item;
          return (
            <div key={index} className="box">
              <img src={flags.png} alt={name} />
              <div className="box-text">
                <h4><b>Country: </b>{name}</h4>
                <h5>
                  <b>Capital: </b>
                  {capital}
                </h5>
                <h5>
                  <b>Region: </b>
                  {region}
                </h5>
                <Link to={`/country/${id}`} className="btn">details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Countries