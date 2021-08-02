import { CaretRightFilled, HomeFilled } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const BreadCrumb = () => {
  return (
    <Wrapper>
      <Breadcrumb separator={<CaretRightFilled />}>
        <BreadcrumbItem>
          <HomeFilled />
          Home
        </BreadcrumbItem>
        <BreadcrumbItem>Products </BreadcrumbItem>
      </Breadcrumb>
    </Wrapper>
  );
};

export default BreadCrumb;
