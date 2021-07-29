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
`;

const Carousal = () => {
  const contentStyle = {
    height: "350px",
    color: "#bb3030",
    background: "#364d79",
  };
  return (
    <Wrapper>
      <Carousel autoPlay infiniteLoop showIndicators={false}>
        <div>
          <img src={"/carousel1.png"} style={contentStyle}></img>
        </div>
        <div>
          <img src={"/carousel2.png"} style={contentStyle}></img>
        </div>
        <div>
          <img src={"/carousal3.png"} style={contentStyle}></img>
        </div>
      </Carousel>
    </Wrapper>
  );
};

export default Carousal;