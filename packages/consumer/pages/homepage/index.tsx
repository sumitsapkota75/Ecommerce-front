import React, { useState, useEffect } from "react";
import Carousal from "../../components/organisms/Carousal";
import SecondBanner from "../../components/organisms/SecondBanner";
import TopCategory from "../../components/organisms/TopCategory";
import ProductShowCase from "../../components/organisms/ProductShowCase";
import ProductByCategory from "../../components/organisms/ProductByCategory";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getProducts } from "../../services/products";
import { GetServerSideProps } from "next";

const Wrapper = styled.div``;

function HomePage() {
  const [pageSize] = useState(10);
  const [productData, setProductData] = useState([]);
  const { data } = useQuery(["getProducts", 1, pageSize], getProducts, {
    keepPreviousData: false,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    setProductData(
      data?.data?.map((data: any, index: number) => {
        return {
          key: index,
          id: data.id,
          company: data.company || "-",
          email: data.email || "-",
          name: data.name || "-",
          memo: data.memo || "-",
          createdDateTime: data.created_at,
          updatedDateTime: data.updated_at || "-",
        };
      })
    );
  }, [data]);

  return (
    <Wrapper>
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

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      page: context.query?.page || 1,
    },
  };
};
