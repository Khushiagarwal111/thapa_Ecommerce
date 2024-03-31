import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
const Header = () => {



  return (
        <div >
        <MainHeader style={{background:"#1234" }}>
            <NavLink to="/">   
                <img className="logo" src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=400" alt="my logo img"/>
                <Nav/>
            </NavLink>
        </MainHeader>
        </div>
  )
};


const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bg:#345343;

  .logo {
    margin-top:20px;
    height:70px;
    width:69px;
    border-radius:40px;

  }

`;
export default Header