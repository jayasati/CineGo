import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Favourite from './pages/Favourite'
import MovieDetails from './pages/MovieDetails'
import MyBooking from './pages/MyBooking'
import SeatLayout from './pages/SeatLayout'

import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  const isAdminRoute=useLocation().pathname.startsWith('/admin');
  return (
    <>
    
    {!isAdminRoute && <Navbar/>}
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        <Route path='/moviedetail/:id' element={<MovieDetails/>}/>
        <Route path='/my-booking' element={<MyBooking/>}/>
        <Route path='/movies/:id/:date' element={<SeatLayout/>}/>

    </Routes>
    {!isAdminRoute && <Footer/>}

    </>
  )
}

export default App