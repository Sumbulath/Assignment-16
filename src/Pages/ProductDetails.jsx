import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header';
import Footer from '../Components/Footer';



function ProductDetails() {
    const {id}=useParams()
    const[product,setProduct]=useState({})
    console.log("id=",id);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        console.log(res.data)
        setProduct(res.data)
      }).catch((err)=>{console.log(err)});
        
        
    })
    
  return (
    <div>
        <Header/>
        <div className="col-md-6">
      <h1>{product?.title}</h1>
      <img src={product?.image} alt=''className='proimage'></img>
      <p>{product?.description}</p>
      <h3>${product?.price}</h3>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductDetails
