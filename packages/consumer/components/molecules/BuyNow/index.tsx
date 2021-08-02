import React from "react";
import styled from "styled-components";
import { CreditCard } from "@styled-icons/boxicons-regular/CreditCard";

const Wrapper = styled.div`
  width: 200px;
  height: 55px;
  background-color: #f05a38;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 6px;
  h3 {
    color: white;
    font-weight: bold;
  }
  &:hover {
    background-color: #e94723;
    cursor: pointer;
  }
`;

const CreditCardIcon = styled(CreditCard)`
  color: white;
  max-width: 100px;
  height: 30px;
  margin-right: 20px;
`;

const BuyNow = () => {
  return (
    <Wrapper>
      <CreditCardIcon />
      <div>
        <h3>Buy Now</h3>
      </div>
    </Wrapper>
  );
};

export default BuyNow;
