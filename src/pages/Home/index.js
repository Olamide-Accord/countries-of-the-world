import React from 'react'
import Countries from '../../components/Countries'
import SearchBar from '../../components/SearchBar'

const Home = () => {
  return (
    <section>
      <SearchBar/>
      <Countries/>
    </section>
  )
}

export default Home