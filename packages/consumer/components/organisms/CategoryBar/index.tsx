import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1b75bb;
`;

const FirstPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .category-list {
    color: white;
    margin-right: 20px;
    text-decoration: none;
    font-size: 16px;
    font-family: sans-serif;
  }
  .category-list:hover {
    text-decoration: underline;
  }
`;

const data = [
  { name: "Accessories" },
  { name: "Mens Fashion" },
  { name: "Electronics" },
  { name: "Watches" },
  { name: "Mobile Phones" },
  { name: "Home Appliances" },
  { name: "Music" },
];

const CategoryBar = () => {
  return (
    <Wrapper>
      {data.map((item) => (
        <FirstPart key={item.name}>
          <a className="category-list" key={item.name} href="#">
            {item.name}
          </a>
        </FirstPart>
      ))}
    </Wrapper>
  );
};

export default CategoryBar;
