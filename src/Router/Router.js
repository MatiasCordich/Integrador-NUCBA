import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Navbar from '../Components/Navbar/Navbar'
import News from '../Pages/News/News';
import { useSelector } from 'react-redux';

const Router = () => {

  const { token } = useSelector( store => store.user)

  return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
            {token && <Route path='/home' element={<Home/>}/>}             
            {token && <Route path='/about' element={<About/>}/>}
            {token && <Route path='/news' element={<News/>}/>}
            {token && <Route path='*' element={<Navigate to='/home'/>}/>}          
            {!token && <Route path='/login' element={<Login/>}/>}
            {!token && <Route path='/register' element={<Register/>}/>}
            {!token && <Route path='*' element={<Navigate to='/login'/>}/>}
        </Routes>
    </BrowserRouter>
  )
};

export default Router
