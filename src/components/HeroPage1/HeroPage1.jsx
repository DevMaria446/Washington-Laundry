import "./HeroPage1.css";
import React from "react";
import Card from "../card/card";

const HeroPage1 = () => {
  const card = [
    {
      id: 1,
      icon: "you",
      title: "Book Pickup",
      body: "Schedule a Laundry pickup online or by phone at a time that works best for you.",
    },

    {
      id: 2,
      icon: "you",
      title: "Expert Cleaning",
      body: "Your clothes are carefully washed, dried, and handled with professional care.",
    },
  ];

  const cardA = [
    {
      id: 1,
      icon: "you",
      title: "We Collect Your Laundry",
      body: "Our teams arrrives at your location to pick up your clothes safely and on time.",
    },
    {
      id: 2,
      icon: "you",
      title: "Fresh Delivery",
      body: "Your clean, neatly folded clothes are delivered back to you, fresh and ready to wear.",
    },
  ];
  return (
    <>
      <div className="hero1-container">
        <p className="hero1-p"> How it Works</p>
        <h2 className="hero1-h2">Laundry Made Simple in 4 Steps </h2>
      </div>
      <div className="hero1-container1">
        <div className="hero1-container1-wrapper">
          <div className="hero1">
            <div className="hero1-left">
              {card.map((i, idx) => (
                <Card body={i.body} key={idx} title={i.title} icon={i.icon} />
              ))}
            </div>
            <div className="hero1-center"></div>
            <div className="hero1-right">
              {cardA.map((i, idx) => (
                <Card body={i.body} key={idx} title={i.title} icon={i.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage1;
