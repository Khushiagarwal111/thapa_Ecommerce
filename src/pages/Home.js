import React from 'react'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Trusted from '../components/Trusted'
import Service from '../components/Service'
import FeatureProducts from '../components/FeatureProducts'


const Home = () => {
 const data = {
  name:"Our Store",
  desc:"its general store"
  }

  return (    
      <> 
        <HeroSection data= {data}/>
        <FeatureProducts/>
        <Service/>
        <Trusted/>
 
      </>
  )
}

const Wrapper = styled.section`
background-color: beige;
${'' /* width: 80%;
height:800px; */}
font-weight:bold;
border-radius: 10px;
`

export default Home