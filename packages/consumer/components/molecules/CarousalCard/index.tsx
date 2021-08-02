import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 360px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 380px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-right: 40px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    width: 142px;
    height: 280px;
  }
  h3 {
    display: block;
  }
  a {
    text-decoration: none;
    color: inherit;
    text-align: center;
  }
  .image {
    img {
      max-width: 200px;
      height: 250px;
      @media (max-width: 600px) {
        width: 145px;
        height: 210px;
        margin-right: 0px;
      }
    }
  }
  .image:hover {
    img {
      transform: scale(0.8);
      transition: all linear 0.2s;
    }
  }
  .title {
    margin-top: 30px;

    p {
      color: #858282;
      @media (max-width: 600px) {
        margin-top: 5px;
      }
    }
    @media (max-width: 600px) {
      margin-top: 0px;
      margin-bottom: 0px;
      font-size: 16px !important;
    }
  }
  .price {
    margin-top: 30px;

    @media (max-width: 600px) {
      margin-top: 0px;
      font-size: 16px !important;
    }
  }
`;

const CarousalCard = ({ data }) => {
  return (
    <Wrapper>
      <a href="/product/slug">
        <div className="image">
          <img src={data.img} />
        </div>
        <div className="title">
          <p>{data.name}</p>
        </div>
        <div className="price">
          <h3>Rs. {data.price}</h3>
        </div>
      </a>
    </Wrapper>
  );
};

export default CarousalCard;
