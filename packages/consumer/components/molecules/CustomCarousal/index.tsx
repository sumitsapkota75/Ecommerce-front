import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  .carousel-container {
    max-width: 1500px;
    background-color: gray;
    height: 300px;
  }
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomCarousal = () => {
  return (
    <Wrapper>
      <Carousel containerClass="carousel-container" responsive={responsive}>
        <div>Sumit</div>
        <div>Sumit 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </Wrapper>
  );
};

export default CustomCarousal;
