import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from "react-router-dom";


function Userlayout() {
  return (
    
        <div className='homepage_container'>
      <Header/>
      <div className='middlecontainer'>
        <Outlet/>
      
      </div>
      
      <Footer/>
    </div>
      
    
  )
}

export default Userlayout
