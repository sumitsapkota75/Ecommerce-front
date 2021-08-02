import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 4px;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #ffff;
  font-size: 21px;
  color: #858282;
  .image {
    max-width: 40px;
    max-height: 40px;
    margin-right: 40px;
    @media (max-width: 768px) {
      flex-direction: column;
      margin-right: 0px;
      max-width: 20px;
      max-height: 20px;
    }
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const BottomBar = () => {
  return (
    <Wrapper>
      <div className="copyright-text">
        Copyright © 2021 Murma IT. All Rights Reserved.
      </div>
      <div className="logos">
        <img
          className="image"
          src="https://st2.depositphotos.com/1031343/6862/v/600/depositphotos_68629709-stock-illustration-cash-on-delivery-label-sticker.jpg"
        />
        <img
          className="image"
          src="http://lh3.googleusercontent.com/Imp5kLEg6mIoYZcsyQoTUQdIIP3gpVPJyxNUj10eqRa1Alw9rf4UkuY_W4xZcl2nCHU=w300"
        />
      </div>
    </Wrapper>
  );
};

export default BottomBar;
