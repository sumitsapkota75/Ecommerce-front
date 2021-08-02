import React from "react";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import CarousalCard from "../../molecules/CarousalCard";

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(158, 158, 158, 0.2); */
  border-radius: 10px;
  .top-section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    font-size: 24px;
    color: black;
    font-family: Roboto;
    font-weight: bold;
  }

  .show-more-btn {
    float: right;
    button {
      width: 150px;
      height: 50px;
    }
  }
  .btn {
    background-color: #f05a38;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 3px;
  }
  .btn:hover {
    cursor: pointer;
    background-color: rgb(241, 74, 36);
  }
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
    margin-top: 40px;
    width: 100vw;
  }
  .carousel-container {
    width: 100%;
    background-color: gray;
    height: 300px;
  }
`;

const productData = [
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

const ProductByCategory = ({ name }) => {
  return (
    <Wrapper>
      <div className="top-section">
        <div className="title">
          <h3>{name}</h3>
        </div>
        <div className="show-more-btn">
          <button className="btn">Show more</button>
        </div>
      </div>

      <div className="items">
        {productData.map((item) => (
          <CarousalCard key={item.name} data={item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default ProductByCategory;
