import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div>
        <Wrapper> 
            <NavLink to = "/">Home</NavLink>  / {title}
        </Wrapper>
    </div>
  )
}

export default PageNavigation

const Wrapper = styled.section`
    border:5px solid pink;
    height:10rem;
    background:pink;
    ${'' /* background-color:${({theme})=>theme.colors.bg}; */}
    display:flex;
    justify-content:flex-start;
    align-items:center;
    font-size:3.2rem;
    padding-left:1.2rem;

    a{
        font-size:3.2rem;
    }


`
