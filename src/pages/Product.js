import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../components/FormatPrice';

const Product = (curElem) => {
  const {id, name , image, price, category} =curElem;

  return (
    
      <NavLink to={ `/singleproduct/${id}`}> 
        <Wrapper className="card"> 
          <figure>
            <img src={image} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>

          <div className="card-data">
            <div className="card-data-flex"> 
            <span>{name}</span><span><FormatPrice price={price}/></span>
            </div>
          </div>
        </Wrapper>
      
      </NavLink>
  
  )
}


const Wrapper= styled.section`
.main-container{

  padding: 12px 12px;
  background-color:white;
}
${'' /* .card{
  border:2px solid red;
  width:300px;
  height:200px;

  box-shadaw:13px 2px 5px  #555;
  background:white;
  padding:10px 10px 10px 10px;

}
.card:hover{ 
  opacity:0.8;

}
figure img{
  width:300px;
  height:180px;
}
.caption{
    height:30px;
    width:100px;
    background:white;
    border-radius:15px;
    position:relative;
    top:-180px;
    left:60%;
    font-size:10px;
    color:black;
    justify-content:center;
    align-items:center;
}
.card-data{ 


}
.card-data-flex > span{
  margin:2% 2%;
  
} */}
`
export default Product