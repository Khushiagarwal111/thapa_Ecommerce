import React from "react";
import styled from "styled-components";
import Sort from "./Sort";
import ProductList from "./ProductList";
import { useFilterContext } from "../../context/filter_context";
import FilterSection from "./FilterSection";

const Allproducts = () => {
 
  return (
  <Wrapper>
  {/* <div>Product list</div> */}
    {/* <div className="container grid grid-filter-column">  */}
      {/* <div> <FilterSection  /> </div>  */}
    {/* </div> */}
    <section className="product-view--sort"> 
      <div className="sort-filter"> <Sort /> </div>
      <div className="main-product list"> <ProductList /> </div>
    </section>
  </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    border:2px solid green;
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      border:2px solid brown;
      grid-template-columns: 1fr;
    }
  }
`;

export default Allproducts;
