import styled from "styled-components";
import React, {useState} from "react";
import { useForm, ValidationError } from '@formspree/react'
import { Button } from '../styles/Button'
// import Button from "./styles/Button.js"
const Contact = () => {

  const [state, handleSubmit] = useForm("mwkgngny");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  const Wrapper = styled.section`
    ${'' /* padding: 9rem 0 5rem 0; */}
    text-align: center;


    .center {
      margin: auto;
      width:40%;
      padding: 10px;
    }
    
    
    form {
      height:500px;
      justify-content: center;
      display:flex; 
      flex-direction: column;
      gap:3rem;
      ${'' /* border:2px solid red; */}
      align:center;

    }
    input, #username, #email, #message, .btn{
      width:95% !important;
      margin:00px auto;
      padding: 20px 20px;
    }
    input, #username, #email, #message, .btn {
      :hover{

      }
    }
   
    .container {
      display:flex;
      margin-top: 12rem;

      .contact-form{

        max-width: 40%;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1rem;

         .btn{  
          cursor: pointer;
          transition: all 0.2s;
          width:90%;
          margin:0px 150px !important;
         
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
    
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111451.42293982298!2d78.9777627!3d29.198337700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a43b9ee42e6cb%3A0x5528a37435e07779!2sThe%20Manor%20Kashipur%20Hotel!5e0!3m2!1sen!2sin!4v1711352344011!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:0}}
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade" 

      />


<h2>Contact Us</h2>
<div classsName="container">
  <div classsName="contact-form">
  <form className="center" action = "https://formspree.io/f/xrgnandr" method="POST" onSubmit={handleSubmit}>
     <input
        id="username"
        type="text" 
        placeholder="Username"      
        required autoComplete = "off"
       
      />

      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
        autoComplete = "off"
      />
      {/* 
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /> 
      */}
      <textarea
        id="message"
        name="Enter your message"
        cols="30"
        rows="10"
        placeholder="Message"
        required
        autoComplete="off"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Button 
        className="btn" 
        type="submit" 
        onClick={state.submitting} 
        >
        Submit
      </Button>
    </form>

  </div>
</div>

  </Wrapper>
  );
};

export default Contact;
