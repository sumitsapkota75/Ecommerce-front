import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  flex-direction: column;
  .title {
    height: 50px;
    background-color: #1b75bb;
    color: white;
    font-size: 33px;
    padding-left: 20px;
  }
  .content {
    font-size: 20px;
    padding: 10px;
    li {
      font-size: 20px;
    }
  }
`;

const Reviews = () => {
  return (
    <Wrapper>
      <div className="title">Rating and Reviews</div>
      <div className="content">
        Product details of LivePro Boxing Gloves 10oz
        <li>Spacious Sparring Gloves</li>
        <li>Ultra-Elastic, Genuine Full-Grain Leather</li>
        <li>Extra Thick And Soft Padding</li>
        <li>Velcro Fastener Ensures An Optimal Hand Fit</li>
        <li>Weight: 0.396kg</li>
      </div>
    </Wrapper>
  );
};

export default Reviews;
