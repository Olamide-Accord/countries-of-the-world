import React from 'react';
import { useGlobalContext } from '../../context';
import { Link, useParams } from 'react-router-dom';
import "./single-country.css";

const SingleCountry = () => {
  const {countries} = useGlobalContext()
  const {id} = useParams();
  const country = countries.filter((item) => {
    return item.id === parseInt(id);
  });
  
  return (
    <section className="single-country">
      <div>
        <Link to="/" className="btn">back home</Link>
      </div>
      {
        country.map((item, index) => {
          const {name, region, population, capital,   img, subregion, borders, languages,  topLevelDomain, currencies, nativeName} = item;
          
          return <div className="countries" key={index}>
            <div className="image">
              <img src={img.png} alt={name} />
            </div>
            <div className="country-text">
              <h4>{name}</h4>
              <div className="flex-text">
                <div className="section-1">
                <h5> 
                  <span>Native Name: </span>
                  {nativeName}
                </h5>
                <h5>
                  <span>Population: </span>
                  {population}
                </h5>
                <h5>
                  <span>Region: </span>
                  {region}
                </h5>
                <h5>
                  <span>Subregion: </span>
                  {subregion}
                </h5>
                <h5>
                  <span>Capital: </span>
                  {capital}
                </h5>
                </div>
                <div className="section-2">
                  <h5>
                    <span>Top Level Domain: </span>
                    {topLevelDomain}
                  </h5>
                  <h5>
                    <span>Currencies: </span>
                    {
                    currencies.map((item) => item.name)}
                  </h5>
                  <h5>
                    <span>Languages: </span>
                    {languages.map(item => item.name)}
                  </h5>
                </div>
              </div>
              <div className="borders">
              <h6>Border Countries: <br /></h6>
              {
                borders ? borders.map((item, index) => <button className="btn">{item}</button>
                )
                : <span className='border-text'>no border countries</span>
              }
            </div>
            </div>
            
          </div>
        })
      }
    </section>
  )
}

export default SingleCountry;