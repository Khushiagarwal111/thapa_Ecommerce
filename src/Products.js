import React from "react";
import styled from "styled-components";
import FilterSection from "./components/ProductPage/FilterSection";
import ProductList from "./components/ProductPage/ProductList";
import Sort from "./components/ProductPage/Sort";
import { useFilterContext } from "./context/filter_context";

const Products = () => {
  const {filter} = useFilterContext()
  // console.log(`filter + ${filter}`);
  return (
  <Wrapper>
    <div className="container grid grid-filter-column"> 
      <div> <FilterSection  /> </div>
    </div>
    <section className="product-view--sort"> 
      <div className="sort-filter"> <Sort /> </div>
      <div className="main-product list"> <ProductList /> </div>
    </section>
  </Wrapper>);
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

export default Products;
