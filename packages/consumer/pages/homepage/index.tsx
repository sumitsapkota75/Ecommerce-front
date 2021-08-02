import React, { useContext } from "react";
import firebase from "firebase";
import PrivateRoute from "../../withPrivateRoute";
import Router from "next/router";
import { AuthContext } from "../../utils/AuthContext";
import Carousal from "../../components/organisms/Carousal";
import SecondBanner from "../../components/organisms/SecondBanner";
import TopCategory from "../../components/organisms/TopCategory";
import ProductShowCase from "../../components/organisms/ProductShowCase";
import ProductByCategory from "../../components/organisms/ProductByCategory";
import styled from "styled-components";

const Wrapper = styled.div``;

function HomePage() {
  const { setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    setUser(null);
    Router.push("/login");
  };

  return (
    <Wrapper>
      <button onClick={handleLogout}>Logout</button>
      <Carousal />
      <SecondBanner link="https://www.faurecia.com/sites/groupe/files/pages/StaySafe_banner1300x550.jpg" />
      <TopCategory />
      <SecondBanner link="https://www.edb.gov.sg/content/dam/edb-en/insights/innovation/innovation-in-a-crisis-singapore-flexes-biomed-chops-against-covid-19/Tracking.gif" />
      <ProductByCategory name="Best Selling" />
      <ProductShowCase
        link1="https://www.gyapu.com/5b3401f65bc17212e259cff9954062aa.png"
        link2="https://www.gyapu.com/5e51950da87172c1ac6d79ef983ee2d5.png"
        link3="https://www.gyapu.com/93f33285714bda55b71cdb4d54bde800.png"
      />
      <ProductByCategory name="Accessories" />
      <SecondBanner link="https://www.gyapu.com/2489ce076d267ac0db04ad2114e92bea.png" />
      <ProductByCategory name="Electronics" />
      <ProductShowCase
        link1="https://www.gyapu.com/ea5db41c3d7188d42f13132b4fe3b2cc.png"
        link2="https://www.gyapu.com/1b63881db53efde3c7932de157dc9da5.png"
        link3="https://www.gyapu.com/bb7e122cd4198a3107bd44e1514c9be9.png"
      />
      <ProductByCategory name="Mens Fashion" />
      <SecondBanner link="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/big-sale-banner-design-template-7a455468cdb295f8b7320d6b492c7105_screen.jpg?ts=1602781632" />
      <ProductByCategory name="Organic and Herbal" />
    </Wrapper>
  );
}

export default PrivateRoute(HomePage);
