import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  margin-top: 40px;
  img {
    border-radius: 10px;
    height: 400px;
    width: 100%;
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
