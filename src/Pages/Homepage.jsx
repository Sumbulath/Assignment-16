import React, { useEffect, useState } from 'react'
import Productcard from '../Components/Productcard'
import axios  from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';


function Homepage() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{console.log(res.data);
            setProducts(res.data)
        }
        ).catch((err)=>console.log(err))

    },[])
  return (
   <>
   <Header/>
   {
    products.length?<div className="container">
    <h1>Product page</h1>

   <div className="row g-2">
    {
        products.map((product)=>(
            <div key={product.id} className="col-md-3">
                <Productcard item={product}/>

            </div>
            
        ))
    }

    

   </div> 
 
   </div>:<Loading/>
   }
   
   <Footer/>
   
   </>

    
  )
}

export default Homepage
