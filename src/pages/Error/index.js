import React from 'react';
import {Link} from "react-router-dom";
import "./error.css"

const Error = () => {
  return (
    <section className="error">
      <div className='error-div'>
        <h4>No matching pages</h4>
        <Link to="/" className="btn">
          back to home
        </Link>
      </div>
    </section>
  )
}

export default Error;