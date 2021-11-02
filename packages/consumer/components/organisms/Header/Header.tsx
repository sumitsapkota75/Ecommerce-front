import React, { useContext } from "react";
import styled from "styled-components";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../../../utils/AuthContext";
import MobileHeader from "../MobileComponents/MobileHeader";
import { firebase } from "@project/shared";
import Router, { useRouter } from "next/router";
import { Dropdown, Menu } from "antd";

const MainWrapper = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffff;
  position: sticky;
  top: 0;
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
  width: auto;
  color: black;
  font-weight: bold;
  svg {
    transform: scale(2);
    fill: #f05a38;
    /* fill: #1b75bb; */
    margin-right: 14px;
  }

  .cart {
    display: flex;
    position: relative;
  }
  .hover:hover {
    cursor: pointer;
  }
  .user-icon {
    margin-left: 40px;
  }
  .badge {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: red;
    color: white;
    position: absolute;
    top: -23px;
    left: 5px;
  }
  .logout {
    margin-left: 40px;
    float: right;
  }
`;

const MobileHeaderWrapper = styled.div`
  @media (min-width: 1074px) {
    display: none;
  }
`;

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    await firebase.auth().signOut();
    setUser(null);
    Router.push("/login");
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    if (!user) {
      router.push("/login");
    }
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          My Orders
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Track My Order
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={handleLogout}>Logout</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <MainWrapper>
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
          <div className="cart hover">
            <ShoppingCartOutlined />
            <div className="badge">5</div>
            Cart
          </div>
          {user ? (
            <Dropdown overlay={menu} placement="bottomLeft">
              <div className="user-icon hover">
                <UserOutlined />
                {"Hello, " + user.displayName}
              </div>
            </Dropdown>
          ) : (
            <div onClick={handleLoginClick} className="user-icon hover">
              <UserOutlined />
              Login/Register
            </div>
          )}
        </OtherItems>
      </Wrapper>
      <MobileHeaderWrapper>
        <MobileHeader />
      </MobileHeaderWrapper>
    </MainWrapper>
  );
};

export default Header;
