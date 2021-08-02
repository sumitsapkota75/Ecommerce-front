import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LogoWrapper = styled.div`
  img {
    width: 120px;
    height: 40px;

    @media (max-width: 1075px) {
      width: 90px;
      height: 40px;
    }
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 900px;
  .search-bar {
    padding: 5px;
    height: 20px;
    max-width: 900px;
    border: 0;
    border-right: none;
    max-width: 700px;
    background-color: #f5f5f5;
    font-size: 16px;
  }
  .search-bar:focus {
    outline: none;
  }

  .search-logo {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f05a38;
    height: 40px;
    width: 50px;
    margin-left: -5px;
    svg {
      transform: scale(1.4);
      fill: white;
    }
  }
`;

const MobileHeader = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img src={"/logo.png"} />
      </LogoWrapper>
      <SearchBarWrapper>
        <input
          className="search-bar"
          placeholder="Search For Products..."
          type="text"
        />
        <div className="search-logo">
          <SearchOutlined />
        </div>
      </SearchBarWrapper>
    </Wrapper>
  );
};

export default MobileHeader;
