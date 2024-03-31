import React  from 'react'
import HeroSection from '../components/HeroSection'
// import {useProductContext} from '../components/ProductContext'

const About = () => {
  // const API = "https://api.pujakaitem.com/api/products"
  // const {myName}= useProductContext()

  const mydata = { 
    name:"thapa Ecommerce",

  };

  return (
    <> 
      {/* {myName} */}
      <HeroSection data = {mydata}/>
    </>
  )
}

export default About