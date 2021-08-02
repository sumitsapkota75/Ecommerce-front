import React from "react";
import styled from "styled-components";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MobileHeader from "../MobileComponents/MobileHeader";
import router from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffff;
  @media (max-width: 1075px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  img {
    width: 171px;
    height: 67px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 700px;
  input {
    &::placeholder {
      font-size: 19px;
    }
  }
  .search-bar {
    padding: 5px;
    height: 45px;
    width: 600px;
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
    height: 52px;
    width: 80px;
    margin-left: -5px;
    svg {
      transform: scale(1.4);
      fill: white;
    }
  }
  .search-logo:hover {
    cursor: pointer;
    background-color: #e24825;
  }
`;

const OtherItems = styled.div`
  display: flex;
  color: black;
  font-weight: bold;
  svg {
    transform: scale(2);
    fill: #f05a38;
    /* fill: #1b75bb; */
    margin-right: 14px;
  }
  .wishlist {
    margin-right: 28px;
  }
  .wishlist:hover {
    cursor: pointer;
  }

  .cart:hover {
    cursor: pointer;
  }
  & .ant-badge-count {
    width: 20px !important;
    height: 22px !important;
    padding: 0px;
    margin-right: -6px;
  }
  & .ant-scroll-number {
    width: 6px !important;
    height: 20px !important;
    font-size: 12px;
  }
`;

const MobileHeaderWrapper = styled.div`
  @media (min-width: 1074px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <LogoWrapper onClick={() => router.push("/homepage")}>
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
        <OtherItems>
          <div className="wishlist">
            <HeartOutlined />
            Wishlist
          </div>
          <div className="cart">
            {/* <Badge count={5}> */}
            <ShoppingCartOutlined />
            {/* </Badge> */}
            Cart
          </div>
          <div className="user-icon">
            <UserOutlined />
          </div>
        </OtherItems>
      </Wrapper>
      <MobileHeaderWrapper>
        <MobileHeader />
      </MobileHeaderWrapper>
    </>
  );
};

export default Header;
