import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import "./single-country.css"

const SingleCountry = () => {
  const {id} = useParams();
  const {country} = useGlobalContext();

  const singleCountry = country.find((item) => item.id === parseInt(id));

  console.log(singleCountry)

  return (
    <div className="single-country">
      <div className="row">
        <div className="image">
          
        </div>
        
      </div>
    </div>        
  )
}

export default SingleCountry