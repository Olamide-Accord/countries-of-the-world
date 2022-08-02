import React from 'react';
import {Link} from"react-router-dom";
import { useGlobalContext } from '../../context';
import "./countries.css"

const Countries = () => {
  const {country, detailSubmit} = useGlobalContext();
  return (
    <div className="countries">
      <div className="box-container">
        {country.map((item, index) => {
          const {id, name, region, population, capital, flags} = item;
          return (
            <div key={index} className="box">
              <img src={flags.png} alt={name} />
              <div className="box-text">
                <h4>{name}</h4>
                <p>
                  <b>Population: </b>
                  {population}
                </p>
                <p>
                  <b>Region: </b>
                  {region}
                </p>
                <p>
                  <b>Capital: </b>
                  {capital}
                </p>
                <Link to={`/country/${id}`} className="btn" onClick={detailSubmit}>details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Countries