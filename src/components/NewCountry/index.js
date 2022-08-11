import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const NewCountry = () => {
  const {filterCountry} = useGlobalContext();

  return (
    <div className="countries">
      {
        filterCountry.map((country, index) => {
          const {id, name, img, population, capital, region} = country;
          return <div className="country" key={index}>
            <div className="image">
              <img src={img.png} alt={name} />
            </div>
            <div className="country-text">
              <h4>{name}</h4>
              <h5>
                <span>Population:</span> {population}
              </h5>
              <h5> 
                <span>Region: </span>
                {region}</h5>
              <h5>
                <span>Capital: </span>
                {capital}</h5>
              <div className='button'>
              <Link to={`/country/${id}`} className="btn">details</Link>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default NewCountry;