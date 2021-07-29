import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 310px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 350px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-right: 40px;
  margin-bottom: 20px;
  .image {
    img {
      max-width: 200px;
      height: 250px;
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
    margin-bottom: 5px;
    p {
      color: #858282;
    }
  }
`;

const CarousalCard = ({ data }) => {
  return (
    <Wrapper>
      <div className="image">
        <img src={data.img} />
      </div>
      <div className="title">
        <p>{data.name}</p>
      </div>
      <div className="price">
        <h3>Rs. {data.price}</h3>
      </div>
    </Wrapper>
  );
};

export default CarousalCard;
