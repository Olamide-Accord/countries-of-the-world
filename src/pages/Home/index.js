import React from 'react'
import Countries from '../../components/Countries';
import SearchForm from '../../components/SearchForm';
import { useGlobalContext } from '../../context';

const Home = () => {
  const {searchTerm} = useGlobalContext()
  return (
    <section className="home">
      <SearchForm/>
      <Countries/>
    </section>
  )
}

export default Home;