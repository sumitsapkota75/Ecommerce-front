import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .carousel-root {
    width: 100%;
  }
  .thumbs-wrapper {
    display: none;
  }
  .img {
    @media (max-width: 1075px) {
      height: 200px;
      width: 100%;
    }
  }
`;

const Carousal = () => {
  return (
    <Wrapper>
      <Carousel autoPlay infiniteLoop showIndicators={false}>
        <div>
          <img className="img" src={"/carousel1.png"}></img>
        </div>
        <div>
          <img className="img" src={"/carousel2.png"}></img>
        </div>
        <div>
          <img className="img" src={"/carousal3.png"}></img>
        </div>
      </Carousel>
    </Wrapper>
  );
};

export default Carousal;
