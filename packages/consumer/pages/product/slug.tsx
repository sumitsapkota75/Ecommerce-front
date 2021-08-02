import React from "react";
import styled from "styled-components";
import AddToCart from "../../components/molecules/AdddToCart";
import BreadCrumb from "../../components/molecules/BreadCrumb";

const Wrapper = styled.div`
  max-width: 90%;
`;
const MainWrapper = styled.div`
  display: flex;
  .img-left {
    max-width: 414px;
    border: 2px solid gray;

    img {
      max-width: 414px;
    }
  }
  .detail-center {
    background-color: #f8f8fa;
    .title {
      font-size: 32px;
      font-weight: bold;
      color: #81818a;
    }
    .price {
      font-size: 42px;
      font-weight: bold;
    }
    .separator {
      height: 1px;
      border: none;
      border-top: 1px dashed #e0e0e0;
    }
    .available {
      font-size: 30px;
      color: green;
      font-weight: bolder;
    }
    .out-of-stock {
      color: red;
      font-size: 30px;
      font-weight: bolder;
    }
  }
`;

const productData = {
  name: "Dr. Browns Options+ Wide-Neck Sampler Kit, PP",
  price: 2490,
  quantity: 20,
};

const ProductDetailPage = () => {
  return (
    <Wrapper>
      <BreadCrumb />
      <MainWrapper>
        <div className="img-left">
          <img src="https://www.gyapu.com/public/832-832/files/16CD6E2BCA0EAA2-1.jpg" />
        </div>
        <div className="detail-center">
          <div className="title">{productData.name}</div>
          <div className="price">Rs. {productData.price}</div>
          <div className="separator"></div>
          <div
            className={productData.quantity > 1 ? "available" : "out-of-stock"}
          >
            {productData.quantity > 1 ? "Available" : "Out of Stock"}
          </div>
          <div className="add-to-cart">
            <AddToCart />
          </div>
        </div>
        <div className="share-right"></div>
      </MainWrapper>
    </Wrapper>
  );
};

export default ProductDetailPage;
