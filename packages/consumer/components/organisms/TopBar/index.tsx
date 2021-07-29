import React from "react";
import styled from "styled-components";
import { PhoneFilled } from "@ant-design/icons";

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: rgba(158, 158, 158, 0.2);
`;

const FirstPart = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  .phone-icon {
    margin-right: 8px;
    svg {
      fill: #1b75bb;
    }
  }
`;

const LastPart = styled.div`
  margin-right: 50px;
  a {
    color: initial;
    text-decoration: none;
    margin-right: 15px;
  }
`;

const TopBar = () => {
  return (
    <Wrapper>
      <FirstPart>
        <PhoneFilled className="phone-icon" />| 9867758494
      </FirstPart>
      <LastPart>
        <a href="#">Refer and Earn</a>
        <a href="#">Track Order</a>
        <a href="#">Login / Register</a>
      </LastPart>
    </Wrapper>
  );
};

export default TopBar;
