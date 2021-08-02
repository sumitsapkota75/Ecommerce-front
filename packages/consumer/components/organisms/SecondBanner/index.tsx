import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  margin-top: 40px;
  @media (max-width: 768px) {
    max-width: 500px;
    max-height: 200px;
    margin-top: 20px;
  }
  img {
    border-radius: 10px;
    width: 100%;
    @media (max-width: 768px) {
      max-width: 400px;
      max-height: 200px;
    }
  }
`;

const SecondBanner = ({ link }) => {
  return (
    <Wrapper>
      <img src={link} />
    </Wrapper>
  );
};

export default SecondBanner;
