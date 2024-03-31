import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'

const HeroSection = ({data}) => {
  return (
    <Wrapper>
        <div className="container">
        <div className="grid grid-two-column">
            <div className="hero-section-data">
                <p className="intro-data">Welocome to <h1>{data.name}</h1> 
                <p>{data.desc}</p>
                <p style = {{align: "justify", color:"purple"}}>lo rem ipsum con sec tet ur ,
                 lorem ip sum dol0  or sit sa am et sit a amet lo rem ipsum dolor sit amet, 
                consec te tur,lorem ipsum dolor sit amet</p>
                </p>
                <NavLink 
                className="hero-btn"
                to="/allproducts"
                >      
                    <Button  className="hero-btn" style = {{ margin:"0% 20%" }}> Shop Now </Button>   
                </NavLink>            
               
           </div>
        {/* our home image */}
            <div class="hero-section-image">
                <div className="Empty-box"></div>
                <div>
                    <img 
                    src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg"  
                    alt="hero section" 
                    className="img-style" 
                    />
                </div>
            </div>        
        </div>
        
        </div>
    </Wrapper>
  )
}
const Wrapper= styled.section`

`



export default HeroSection