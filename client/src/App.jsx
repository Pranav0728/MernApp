import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Navbar from './components/Navbar';
import Error from './Pages/Error';
const App = () => {
  return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
