import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './context';

import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import SingleCountry from './pages/SingleCountry';
import Error from './pages/Error';

const App = () => {
  const {theme} = useGlobalContext()
  return (
    <div id={theme} className="App" >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/country/:id' element={<SingleCountry/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
