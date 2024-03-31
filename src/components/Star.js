import React from 'react'
import {FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai";
import styled from 'styled-components';
  

const Star = ({stars, reviews}) => {

  const  ratingstar=Array.from({length:5}, (elem, index)=> {
    let number = index+0.5;

      return (
        <span Key = {index}> 
        { stars >= index + 1 ?(
           <FaStar className="icon iconFull" />
           ) : stars >= number ? (
             <FaStarHalfAlt  className="icon iconHalf"/>
             ) : (
               <AiOutlineStar  className="icon"/>
               )
        }
        </span> 
      )
   })
  console.log("stars", stars)
  return (
    <Wrapper>
      <div className="icon-styles">
        {ratingstar}
        <span>({stars} customer rating)</span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.icon-styles{
 border:2px solid red;
 }
 .icon{
  border:2px solid border;
  font-size:24px;
  color:yellow;
}

span{ 
 font-size:16px;

}

`

export default Star