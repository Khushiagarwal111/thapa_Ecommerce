import React from 'react'
import styled from 'styled-components'
import {TbTruckDelivery} from "react-icons/tb"
import { MdSecurity} from "react-icons/md"
import {GiReceiveMoney} from "react-icons/gi"
import {RiSecurePaymentLine} from "react-icons/ri"

import { icons } from 'react-icons/lib'
const Service = () => {

  return (
    <div>
        <Wrapper>
            <div class="container">  
                <div class="grid grid-three-column"> 
                    <div className="section-1">  
                        <div>
                            <TbTruckDelivery className="icon" />
                            <h3>Super fast and free delivery</h3>                   
                                    
                        </div>                
                    </div>
                    <div className="section-2">
                        <div className="section-colum-2">
                            <div>
                                <MdSecurity className="icon" />
                                <h3>Non-contact Shipping</h3>
                            </div>
                           
                        </div>
                        <div className="section-colum-2">
                            <div>
                                <GiReceiveMoney className="icon" />
                                <h3>Money-back Guaranteed</h3>
                            </div>
                        </div>
                    </div>
                    <div className="section-3">
                        <div>
                            <RiSecurePaymentLine className="icon" />
                            <h3>Super Secure Payment System</h3>
                        </div>   
                    </div>
                </div>
            </div>           
             
        </Wrapper>
    </div>
  )
}
const Wrapper= styled.section`

padding: 9rem 0;

.grid{
     gap:4.8rem;
}
div>h3{
   
}
.section-1, 
.section-2,
.section-3{
    display:flex;
    height:30rem;
    flex-direction: column;
    width:auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   
    justify-content:center;
    background : ${({theme})=>theme.colors.bg};
    text-align:center;
    border-radius: 2rem;


}
.section-2{
    gap:5rem;
    background-color:transparent;
    box-shadow: none;
   

    .section-colum-2 > div{
       
         background-color: ${({theme})=>theme.colors.bg};
         display:flex;
         flex-direction:column;
         flex:1;
         height: 12rem;
         border-radius:2rem;
   
    }
    div {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }

 }
@media (max-width: $ {({theme})=>theme.media.mobile}){
    .brand-section-slider{
        margin-top:3.2 rem;
        display:grid;
        grid-template-columns: 1fr 1fr;
        
    }

}

.icon { 
    width:8rem;
    height:8rem;
    padding:10px;
    border-radius:50%;
    background-color: #FFFFFF;
    color:#5138ee;
}


`

export default Service