import React from 'react'

// import { Button } from '../styles/Button.js'
import styled from 'styled-components'
import { NavLink ,Link} from 'react-router-dom'
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import AddToCart from './AddToCart';

const Footer = ({stock}) => {
  return (
    <div>
        <Wrapper>
        <div className="contact-short">
            <div className="grid grid-two-column">
                <div className='footer-first'> 
                    <h3>Ready to get started</h3>
                    <h3>Talk to us Today</h3>
                </div>
            <div>
                <Button Link="/contact" className="btn hireme-btn">
                    Get started 
                </Button>
            </div>
            </div>
        </div>

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Thapa Technical</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank">
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div>
            <p className="center-footer">
                @{new Date().getFullYear()} project developed by Khushi Agarwal
              </p>
             
            </div>
          </div>
        </footer>
        </Wrapper>
    </div>
  )
}
const Wrapper= styled.section`
    
    h3, p {     
        margin:10px 2px; 
    
    }
      
    .footer-first {
        gap:5rem;
    }

    .iSIFGq {
        margin: 0;
    }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 2rem 2rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
.center-footer{
  border: 2px solid red;
  align:center;
  position: relative;
  left:40%;
  


 }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }

`

export default Footer
