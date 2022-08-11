import React from 'react'
import { useGlobalContext } from '../../context';
import Countries from '../../components/Countries';
import NewCountry from '../../components/NewCountry';
import SearchBar from '../../components/SearchBar'

const Home = () => {
  const {filterCountry} = useGlobalContext()
  return (
    <section>
      <SearchBar/>
      {filterCountry && <NewCountry/>}
      <Countries/>
    </section>
  )
}

export default Home