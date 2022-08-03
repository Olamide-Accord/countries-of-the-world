import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import "./single-country.css"

const SingleCountry = () => {
  const {id} = useParams();
  const {country} = useGlobalContext();

  const singleCountry = country.find((item) => {
    const newId = parseFloat(id);
    return item.id === newId
  });
  console.log(singleCountry);
  const {flags, name, population, region, capital} = singleCountry;
  return (
    <section className="single-country">
      <Link to="/" className="back-btn">back home</Link>
      <div className="row">
        <div className="image">
          <img src={flags.png} alt={name} />
        </div>
        <div className="country-text">
          <h3><span className="bold">name: </span>{name}</h3>
          <h4><span className="bold">capital: </span>{capital}</h4>
          <h5><span className="bold">population: </span>{population}</h5>
          <h5><span className="bold">region: </span>{region}</h5>
        </div>
      </div>
    </section>        
  )
}

export default SingleCountry