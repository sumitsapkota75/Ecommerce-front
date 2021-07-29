import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  margin-top: 40px;
  flex-wrap: wrap;
  .img {
    max-width: 500px;
    height: 250px;
  }
`;

const ProductShowCase = ({ link1, link2, link3 }) => {
  return (
    <Wrapper>
      <div className="img-1">
        <img className="img" src={link1} />
      </div>
      <div className="img-2">
        <img className="img" src={link2} />
      </div>
      <div className="img-3">
        <img className="img" src={link3} />
      </div>
    </Wrapper>
  );
};

export default ProductShowCase;
