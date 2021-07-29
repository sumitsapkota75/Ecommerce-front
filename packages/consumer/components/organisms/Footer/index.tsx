import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #ffff;
  margin-top: 20px;
  color: #858282;
  .first-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 4%;
  }
  .social-sharing {
    display: flex;
    svg {
    }
  }
  .icon {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
  .contact-us-text {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .call-text {
    margin-bottom: 15px;
  }
  .email-text {
    margin-bottom: 15px;
  }
  .second-section {
    display: flex;
    justify-content: center;
    align-items: center;
    & a:hover {
      color: "#f05a38";
    }
  }
  .links {
    margin-bottom: 9px;
    display: block;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: #858282;
  }
  .links:hover {
    color: #f05a38;
  }
  .third-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4%;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="first-section">
        <div>
          <p className="contact-us-text">Contact Us</p>
        </div>
        <h3 className="call-text">
          <PhoneOutlined /> Call: 9813413569
        </h3>
        <h3 className="email-text">
          <MailOutlined /> Email: murmastore@gmail.com
        </h3>
        <div className="social-sharing">
          <img
            className="icon"
            src="https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg"
          />

          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          />
        </div>
      </div>
      <div className="second-section">
        <div>
          <p className="contact-us-text">Links</p>
          <a className="links" href="/about-us">
            About Us
          </a>
          <a className="links" href="/about-us">
            Contact Us
          </a>
          <a className="links" href="/about-us">
            Blog
          </a>
          <a className="links" href="/about-us">
            FAQs
          </a>
        </div>
      </div>
      <div className="third-section">
        <div>
          <p className="contact-us-text">Policies</p>
          <a className="links" href="/about-us">
            Refund Policy
          </a>
          <a className="links" href="/about-us">
            Terms and Conditions
          </a>
          <a className="links" href="/about-us">
            Data Policy
          </a>
          <a className="links" href="/about-us">
            Return Policy
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
