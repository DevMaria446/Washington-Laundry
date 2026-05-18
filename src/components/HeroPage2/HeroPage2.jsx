import "./HeroPage2.css";
import React from "react";
import Card1 from "../Card1/Card1";
import Img1 from "../../assets/icon1.png"

const HeroPage2 = () => {
  const card1 = [
    {
      id: 1,
      image: Img1,
      description: "Wash & Fold",
    },
    // {
    //   id: 2,
    //   image: "you",
    //   description: "Dry Cleaning",
    // },
    // {
    //   id: 3,
    //   image: "you",
    //   description: "Ironing",
    // },
    // {
    //   id: 3,
    //   image: "you",
    //   description: "Express Service",
    // },
  ];
  return (
    <>
      <div className="HeroPage2-container">
        <div className="HeroPage2-container-wrapper">
          <h1 className="HeroPage2-container-wrapper-h1">
            {" "}
            Laundry Services Designed
            <br /> for Your Convenience
          </h1>
          <button className="HeroPage2-container-wrapper-btn">
            {" "}
            View all Services
          </button>
        </div>
      </div>
      <div className="all-heroPage2">
        <div className="all-heroPage2-wrapper">
          <div className="heroPage2">
            {card1.map((i,idx) => (
              <Card1 image={i.image} key={idx} description={i.description}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage2;
