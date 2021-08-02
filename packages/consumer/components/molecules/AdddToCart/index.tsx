import { ShoppingFilled } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 200px;
  height: 40px;
  background-color: red;
`;

const AddToCart = () => {
  return (
    <Wrapper>
      <ShoppingFilled />
    </Wrapper>
  );
};

export default AddToCart;
