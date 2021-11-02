import React from "react";
import styled from "styled-components";
import AddToCart from "../../components/molecules/AdddToCart";
import BreadCrumb from "../../components/molecules/BreadCrumb";
import BuyNow from "../../components/molecules/BuyNow";
import SelectQuantity from "../../components/molecules/SelectQuantity";

import CarousalCard from "../../components/molecules/CarousalCard";
import ProductDetail from "../../components/organisms/ProductDetail";
import Reviews from "../../components/organisms/Reviews";

const Wrapper = styled.div`
  max-width: 90%;
  flex-direction: row;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  .similar-product {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .product-list-title {
    display: flex;
    font-size: 33px;
    margin-bottom: 30px;
    margin-top: 40px;
    color: #81818a;
    font-weight: bolder;
    justify-content: center;
  }
`;
const MainWrapper = styled.div`
  justify-content: center;
  display: flex;
  height: 500px;
  @media (max-width: 1111px) {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    margin-top: 10px;
  }
  .img-left {
    max-width: 414px;
    border: 2px solid gray;
    @media (max-width: 768px) {
      max-width: 300px;
    }
    img {
      max-width: 414px;
      @media (max-width: 768px) {
        max-width: 300px;
      }
    }
  }
  .detail-center {
    background-color: #f8f8fa;

    padding: 10px 20px 10px 20px;
    .title {
      font-size: 32px;
      font-weight: bold;
      color: #81818a;
      @media (max-width: 768px) {
        font-size: 21px;
      }
    }
    .price {
      font-size: 42px;
      font-weight: bold;
      margin-top: 20px;
      @media (max-width: 768px) {
        font-size: 24px;
        margin-top: 10px;
      }
    }

    .available {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 20px;
      color: #27d327;
    }
    .out-of-stock {
      margin-top: 20px;
      margin-bottom: 20px;
      color: red;
      font-size: 30px;
      font-weight: bolder;
    }
    .btns {
      display: flex;
      margin-top: 40px;
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
    .add-to-cart {
      margin-right: 40px;
      @media (max-width: 768px) {
        margin-bottom: 30px;
      }
    }
    .buynow {
      @media (max-width: 768px) {
        margin-bottom: 30px;
      }
    }
  }
  .social-icons {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    margin-top: 10px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .share-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    @media (max-width: 768px) {
      display: flex;
      text-align: center;
    }

    h3 {
      color: #81818a;
      font-size: 20px;
      font-weight: bolder;
    }
    .manufacture {
      margin-bottom: 15px;
      margin-top: 15px;
    }
    .brand {
      margin-bottom: 15px;
      margin-top: 15px;
    }
    .sku {
      margin-top: 15px;
    }
  }
`;
const SimilarProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Separator = styled.div`
  height: 1px;
  border: none;
  border-top: 1px dashed #e0e0e0;
`;

const productData = {
  name: "Dr. Browns Options+ Wide-Neck Sampler Kit, PP and little longer text",
  price: 2490,
  quantity: 20,
};
const similarProduct = [
  {
    name: "Cool Shirt",
    img: "https://i.pinimg.com/474x/1f/a3/b0/1fa3b0a68701a158c2359685a101df5b.jpg",
    url: "localhost:3000/mens-fashion",
    price: "300",
  },
  {
    name: "Titan Watch",
    img: "https://assetscdn1.paytm.com/images/catalog/product/W/WA/WATTITAN-WATCH-TITA669221F547CAA5/1562695373326_0..jpg?imwidth=320&impolicy=hq",
    url: "localhost:3000/mens-fashion",
    price: "300",
  },
  {
    name: "LG Fridge",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5386/5386506_sd.jpg;maxHeight=640;maxWidth=550",
    url: "localhost:3000/mens-fashion",
    price: "300",
  },
  {
    name: "Wallet",
    img: "https://www.thestatesman.com/wp-content/uploads/2017/12/accessories.jpg",
    url: "localhost:3000/mens-fashion",
    price: "300",
  },
  {
    name: "Ayurvedic",
    img: "https://static3.depositphotos.com/1007047/222/i/600/depositphotos_2225284-stock-photo-herbs.jpg",
    url: "localhost:3000/mens-fashion",
    price: "300",
  },
  {
    name: "One plus 9",
    img: "https://www.gizmochina.com/wp-content/uploads/2020/12/oneplus_5011101665_9_pro_128gb_5g_1629057-500x500.jpg",
    url: "localhost:3000/mens-fashion",
    price: "300",
  },
  {
    name: "LG Fridge",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5386/5386506_sd.jpg;maxHeight=640;maxWidth=550",
    url: "localhost:3000/mens-fashion",
    price: "300",
  },
  {
    name: "Wallet",
    img: "https://www.thestatesman.com/wp-content/uploads/2017/12/accessories.jpg",
    url: "localhost:3000/mens-fashion",
    price: "300",
  },
];
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
          <Separator />
          <div
            className={productData.quantity > 1 ? "available" : "out-of-stock"}
          >
            {productData.quantity > 1 ? "Available" : "Out of Stock"}
          </div>
          <SelectQuantity />
          <div className="btns">
            <div className="add-to-cart">
              <AddToCart />
            </div>
            <div className="buynow">
              <BuyNow />
            </div>
          </div>
        </div>
        <div className="share-right">
          <h3>Share product...</h3>
          <div className="social-icons">
            <img
              className="img"
              src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
            />
            <img
              className="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
            />
            <img
              className="img"
              src="https://unv.org.np/files/Twitter-logo-sq.png"
            />
          </div>
          <Separator />
          <div className="brand">
            <h3>Brand</h3>
            <div>Brand Name</div>
          </div>
          <Separator />
          <div className="manufacture">
            <h3>Manufacture</h3>
            <div>Manufacturer Name</div>
          </div>
          <Separator />
          <div className="sku">
            <h3>SKU</h3>
            <div>SKU code</div>
          </div>
        </div>
      </MainWrapper>
      <ProductDetail />
      <Reviews />
      <div className="product-list-title">Similar Product</div>
      <SimilarProduct>
        {similarProduct.slice(0, 4).map((item) => (
          <CarousalCard key={item.name} data={item} />
        ))}
      </SimilarProduct>
      <div className="product-list-title">Best Selling in Murma</div>
      <SimilarProduct>
        {similarProduct.slice(0, 4).map((item) => (
          <CarousalCard key={item.name} data={item} />
        ))}
      </SimilarProduct>
    </Wrapper>
  );
};

export default ProductDetailPage;
