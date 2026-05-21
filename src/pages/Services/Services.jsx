import React from "react";
import "./Services.css";
import Header from "../../components/header/header";
import ServiceCard from "../../components/card2/card2";

const Services = () => {
  const everydayItem = [
    { id: 1, item: "Shirt", price: "₦500" },
    { id: 2, item: "T-shirt", price: "₦400" },
    { id: 3, item: "Trousers", price: "₦600" },
    { id: 4, item: "Jeans", price: "₦700" },
  ];
  const babyItem = [
    { id: 5, item: "Baby Clothes Bundles", price: "₦1,200" },
    { id: 6, item: "Baby Blanket", price: "₦1,500" },
    { id: 7, item: "Baby Bedding", price: "₦1,800" },
  ];
  return (
    <main className="mainService-conatainer">
      <Header />
      <div className="wrapSection-container">
        <section className="service-container">
          <span>Our Services</span>
          <h2>Expert Laundry Services Delivered Fresh</h2>
          <p>
            From quick pickups to careful cleaning and on- <br />
            time on what matters most.
          </p>
        </section>
        <ServiceCard />
        <section className="itemPricing-container">
          <h2>Item-Based Pricing</h2>
          <div className="pricing-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Prices</th>
                </tr>
              </thead>
              <tbody>
                <tr className="category-row">
                  <td colSpan="2">
                    <span className="minTitle">Everyday Items</span>
                  </td>
                </tr>
                {everydayItem.map((item) => (
                  <tr className="mainRightBorder" key={item.id}>
                    <td className="rightBorder">{item.item}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
                <tr className="category-row">
                  <td colSpan="2">
                    <span className="minTitle">Baby Items</span>
                  </td>
                </tr>
                {babyItem.map((item) => (
                  <tr className="mainRightBorder" key={item.id}>
                    <td className="rightBorder">{item.item}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="read-more">Read more</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Services;
