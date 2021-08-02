import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  flex-wrap: wrap;

  @media (max-width: 1075px) {
    border-radius: 50%;
    margin-top: 10px;
  }
`;
const CardWrapper = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1130px) {
    margin-right: 10px;
    transform: scale(0.8);
  }

  img {
    height: 200px;
    max-width: 200px;
    margin-bottom: 9px;
    @media (max-width: 1138px) {
      height: 100px;
      max-width: 200px;
    }
    @media (max-width: 1290px) {
      height: 200px;
      max-width: 150px;
    }
    &:hover {
      transform: scale(0.8);
      transition: all linear 0.2s;
    }
  }
  h3 {
    text-decoration: none;
    color: initial;
  }
`;

const categoryData = [
  {
    name: "Mens Fashion",
    img: "https://thumbs.dreamstime.com/b/fashion-clothes-short-sleeve-shirt-jacket-jeans-mens-photos-made-white-background-fashion-clothes-short-sleeve-shirt-jacket-148909322.jpg",
    url: "localhost:3000/mens-fashion",
  },
  {
    name: "Watches",
    img: "https://assetscdn1.paytm.com/images/catalog/product/W/WA/WATTITAN-WATCH-TITA669221F547CAA5/1562695373326_0..jpg?imwidth=320&impolicy=hq",
    url: "localhost:3000/mens-fashion",
  },
  {
    name: "Electronics",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5386/5386506_sd.jpg;maxHeight=640;maxWidth=550",
    url: "localhost:3000/mens-fashion",
  },
  {
    name: "Accessories",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQES3FjPpZJg8gS3HSHSFmeh8J3jKbKCcIxgg&usqp=CAU",
    url: "localhost:3000/mens-fashion",
  },
  {
    name: "Organic",
    img: "https://static3.depositphotos.com/1007047/222/i/600/depositphotos_2225284-stock-photo-herbs.jpg",
    url: "localhost:3000/mens-fashion",
  },
  {
    name: "Mobile Phones",
    img: "https://www.gizmochina.com/wp-content/uploads/2020/12/oneplus_5011101665_9_pro_128gb_5g_1629057-500x500.jpg",
    url: "localhost:3000/mens-fashion",
  },
];

const TopCategory = () => {
  return (
    <Wrapper>
      {categoryData.map((item) => (
        <a href={item.url} className="link" key={item.name}>
          <CardWrapper>
            <img className="img" src={item.img} />
            <h3>{item.name}</h3>
          </CardWrapper>
        </a>
      ))}
    </Wrapper>
  );
};

export default TopCategory;
