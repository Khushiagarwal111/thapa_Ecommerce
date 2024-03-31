import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home.js'
// import Product from "./Product.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import SingleProduct from "./pages/SingleProduct.js";
import Cart from "./pages/Cart.js";
import ErrorPage from "./pages/ErrorPage.js";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import Allproducts from "./components/ProductPage/Allproducts.js";
import Products from "./Products.js";

const App = () => {
 
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  


  return (
  <ThemeProvider theme={theme}>
  <Router>
    <GlobalStyle/>

    <Header/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/allproducts" element={<Allproducts/>}/>
      <Route path ="/product" element={<Products/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/singleproduct/:id" element={<SingleProduct/>}/>
      <Route path ="/cart" element ={ <Cart/>}/>
      <Route path ="*" element= {<ErrorPage/>}/>
    </Routes>
  </Router>
  <Footer/>
  </ThemeProvider>
   

  )
};

export default App;
