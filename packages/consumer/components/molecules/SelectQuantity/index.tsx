import React, { useState } from "react";
import styled from "styled-components";
import { Minus } from "@styled-icons/boxicons-regular/Minus";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { Input } from "antd";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;

  .controller-body {
    display: flex;
    width: 200px;
    height: 40px;
    border: 1px solid #e0e0e0;
    background-color: white;
    margin-left: 20px;
  }
  .minus-btn {
    width: 50px;
    height: 40px;
    border: 1px solid #e0e0e0;
  }
  .minus-btn:hover {
    cursor: pointer;
    color: #817e7e !important;
  }
  .counter {
    width: 100px;
    height: 40px;
    border: 1px solid #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    Input {
      width: 50px;
      border: none;
      display: flex;
      justify-content: center;
      font-size: 21px;
      color: #4e4b4b;
      position: absolute;
      left: 35%;
      &:focus {
        border: none;
        outline: none;
      }
      /* to remove the number input up and down arrow */
      &::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  .plus-btn {
    width: 50px;
    height: 40px;
    border: 1px solid #e0e0e0;
  }
`;
const MinusIcon = styled(Minus)`
  height: 40px;
  color: #e0e0e0;
  &:hover {
    cursor: pointer;
    color: #817e7e !important;
  }
`;
const PlusIcon = styled(Plus)`
  height: 40px;
  color: #e0e0e0;
  &:hover {
    cursor: pointer;
    color: #817e7e !important;
  }
`;

const SelectQuantity = () => {
  const [counter, setcounter] = useState(1);
  const handleMinus = () => {
    if (counter > 1) {
      setcounter(counter - 1);
    }
  };
  const handlePlus = () => {
    setcounter(counter + 1);
  };
  const handleInputChange = (event) => {
    setcounter(event.target.value);
  };
  return (
    <Wrapper>
      <div>Quantity:</div>
      <div className="controller-body">
        <div className="minus-btn " onClick={handleMinus}>
          <MinusIcon />
        </div>
        <div className="counter">
          <Input type="number" value={counter} onChange={handleInputChange} />
        </div>
        <div className="plus-btn" onClick={handlePlus}>
          <PlusIcon />
        </div>
      </div>
    </Wrapper>
  );
};

export default SelectQuantity;
