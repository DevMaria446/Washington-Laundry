import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="Dashboard-item">
        <div className="Dashboard-item-one-child">
          <div className="Total-Order">
            {" "}
            Total Orders Today{" "}
            <div className="Order-Icon">
              <img src="../src/assets/Frame 18.png" alt="" />
            </div>
          </div>
          <div className="Text-number">
            510{" "}
            <span className="Text-percentage">
              <img
                className="Percentage-Icon"
                src="../src/assets/flowbite-arrow.png"
                alt=""
              />
              1.8%
            </span>
          </div>
          <div className="yesterday">Yesterday: 180</div>
        </div>
        <div className="Dashboard-item-one-child">
          {" "}
          <div className="Total-Order">
            {" "}
            Total in Progress{" "}
            <div className="Order-Icon">
              <img src="../src/assets/Process.png" alt="" />
            </div>
          </div>
          <div className="Text-number">
            88{" "}
            <span className="Text-percentage">
              <img
                className="Percentage-Icon"
                src="../src/assets/flowbite-arrow.png"
                alt=""
              />
              0.5%
            </span>
          </div>
          <div className="yesterday">Yesterday: 58</div>
        </div>
        <div className="Dashboard-item-one-child">
          {" "}
          <div className="Total-Order">
            {" "}
            Ready for Delivery{" "}
            <div className="Order-Icon">
              <img src="../src/assets/Delivery.png" alt="" />
            </div>
          </div>
          <div className="Text-number">
            338{" "}
            <span className="Text-percentage">
              <img
                className="Percentage-Icon"
                src="../src/assets/flowbite-arrow.png"
                alt=""
              />
              1.7%
            </span>
          </div>
          <div className="yesterday">Yesterday: 123</div>
        </div>
        <div className="Dashboard-item-one-child">
          {" "}
          <div className="Total-Order">
            {" "}
            Total Revenue{" "}
            <div className="Order-Icon">
              <img src="../src/assets/Revenue.png" alt="" />
            </div>
          </div>
          <div className="Text-number-1">
            N968,900{" "}
            <span className="Text-percentage-1">
              <img
                className="Percentage-Icon"
                src="../src/assets/flowbite-arrow.png"
                alt=""
              />
              2.0%
            </span>
          </div>
          <div className="yesterday">Yesterday: N764,600</div>
        </div>
      </div>
      <div className="Dashboard-item-one">
        <div className="Dashboard-item-child">
          <div className="Graph">
            <h1 className="Graph-title">Revenue Analytics</h1>
            <p className="Graph-description">For Mar7th-Mar14th</p>
          </div>
          <div className="Graph-map">
            <img className="Graph-image" src="../src/assets/Chart.png" alt="" />
          </div>
        </div>
        <div className="Dashboard-item-child-two">
          <div className="Graph-subtitle">Laundry Processing</div>
          <div className="Graph-detail">
            <div className="Graph-Circle">
              <img
                className="Graph-Circle-image"
                src="../src/assets/pie chart.png"
                alt=""
              />
            </div>
            <div className="Graph-bar">
              <p className="packing-cloths">
                Washing <input className="packing-checkbox" type="checkbox" />
              </p>
              <p className="packing-cloths">
                Drying <input className="packing-checkbox" type="checkbox" />
              </p>
              <p className="packing-cloths">
                Ironing <input className="packing-checkbox" type="checkbox" />
              </p>
              <p className="packing-cloths">
                Stain Removal{" "}
                <input className="packing-checkbox" type="checkbox" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Dashboard-item-two">
        <div className="Recent-Orders">
          <h1 className="Recent-Orders-title">Recent Orders</h1>
          <p className="Recent-Orders-link">view all</p>
        </div>
        <div className="Top-Products">
          <div className="Products-detail">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID-one">Order ID</p>
            <p className="Client-side">Client Name</p>
          </div>
          <div className="Products-sales-main">
            <p>Content</p>
            <p>Status</p>
            <p>Amount</p>
          </div>
        </div>
        <div className="Recent-Orders-list">
          <div className="Products-detail">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10425</p>
            <p className="Client-side">Ada Oluchi</p>
          </div>
          <div className="Products-sales">
            <p>08123456787</p>
            <p className="Status-one">assigned</p>
            <p>N79,900</p>
            <p>...</p>
          </div>
        </div>
        <div className="Recent-Orders-list">
          <div className="Products-detail">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10428</p>
            <p className="Client-side">Febechi pascal</p>
          </div>
          <div className="Products-sales">
            <p c>08128956354</p>
            <p className="Status-two">Request</p>
            <p>N10,400</p>
            <p>...</p>
          </div>
        </div>
        <div className="Recent-Orders-list">
          <div className="Products-detail">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10475</p>
            <p className="Client-side">Ogunsunya Micheal</p>
          </div>
          <div className="Products-sales">
            <p>08127000787</p>
            <p className="Status-three">processing</p>
            <p>N45,000</p>
            <p>...</p>
          </div>
        </div>
        <div className="Recent-Orders-list-one">
          <div className="Products-detail">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10467</p>
            <p className="Client-side">Onyim&SonsFirm</p>
          </div>
          <div className="Products-sales">
            <p>08166156787</p>
            <p className="Status-four">Ready</p>
            <p>N228,000</p>
            <p>...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
