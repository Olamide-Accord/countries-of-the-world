import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import { useGlobalContext } from './context'
import Home from './pages/Home'
import SingleCountry from './pages/SingleCountry'

const App = () => {
  const {theme} = useGlobalContext()
  return (
    <div className="App" id={theme}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/country/:id' element={<SingleCountry/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
