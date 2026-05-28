import React from "react";
import "../../pages/Dashboard/DashboardStyles/Order.css";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";

const Order = () => {
  return (
    <div className="Order">
      <div className="Order-header">
        <button className="order-btn">
          <span>+</span>Create order
        </button>
        <div className="Order-filters">
          <button className="filter-btn">Filter by</button>
          <button className="filter-btn">Sort by</button>
        </div>
      </div>
      <div className="Order-content">
        <div className="Top-Products-section">
          <div className="Products-detail-one">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID-one">Order ID</p>
            <p className="Client-side">Client Name</p>
          </div>
          <div className="Products-sales-main-one">
            <p>Content</p>
            <p>Status</p>
            <p>Amount</p>
          </div>
        </div>
        <div className="Recent-Orders-list-Second">
          <div className="Products-detail-two">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10425</p>
            <p className="Client-side">Delight Nurser</p>
          </div>
          <div className="Products-sales-two">
            <p>08123456787</p>
            <p className="Status-three">Processing</p>
            <p>N176,900</p>
            <p>...</p>
          </div>
        </div>
        <div className="Recent-Orders-list-Second">
          <div className="Products-detail-two">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10425</p>
            <p className="Client-side">Ada Oluchi</p>
          </div>
          <div className="Products-sales-two">
            <p>08053456991</p>
            <p className="Status-one">Assigned</p>
            <p>N10,400</p>
            <p>...</p>
          </div>
        </div>
        <div className="Recent-Orders-list-Second">
          <div className="Products-detail-two">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10425</p>
            <p className="Client-side">Febechi pascal</p>
          </div>
          <div className="Products-sales-two">
            <p>08123456787</p>
            <p className="Status-three">Processing</p>
            <p>N79,900</p>
            <p>...</p>
          </div>
        </div>
        <div className="Recent-Orders-list-Second">
          <div className="Products-detail-two">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10425</p>
            <p className="Client-side">Onyie Grace</p>
          </div>
          <div className="Products-sales-two">
            <p>08123456787</p>
            <p className="Status-five">Delivered</p>
            <p>N66,600</p>
            <p>...</p>
          </div>
        </div>
        <div className="Recent-Orders-list-Second">
          <div className="Products-detail-two">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10425</p>
            <p className="Client-side">Ogunsunya Micheal</p>
          </div>
          <div className="Products-sales-two">
            <p>08123456787</p>
            <p className="Status-three">Processing</p>
            <p>N45,000</p>
            <p>...</p>
          </div>
        </div>
        <div className="Recent-Orders-list-Second">
          <div className="Products-detail-two">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10425</p>
            <p className="Client-side">Onyim & Sons law</p>
          </div>
          <div className="Products-sales-two">
            <p>08123456787</p>
            <p className="Status-five">Delivered</p>
            <p>N228,000</p>
            <p>...</p>
          </div>
        </div>
        <div className="Recent-Orders-list-Second">
          <div className="Products-detail-two">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10425</p>
            <p className="Client-side">Ebere Sunday</p>
          </div>
          <div className="Products-sales-two">
            <p>08123456787</p>
            <p className="Status-six">Cancelled</p>
            <p>N8,800</p>
            <p>...</p>
          </div>
        </div>
        <div className="Recent-Orders-list-Second">
          <div className="Products-detail-two">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10425</p>
            <p className="Client-side">Oluchi Olisa</p>
          </div>
          <div className="Products-sales-two">
            <p>08123456787</p>
            <p className="Status-four">Ready</p>
            <p>N68,900</p>
            <p>...</p>
          </div>
        </div>
        <div className="Recent-Orders-list-Second">
          <div className="Products-detail-two">
            <input className="packing-checkbox-1" type="checkbox" />
            <p className="Order-ID">#10425</p>
            <p className="Client-side">Pelumi Gbenga</p>
          </div>
          <div className="Products-sales-two">
            <p>08123456787</p>
            <p className="Status-two">Request</p>
            <p>N19,000</p>

            <p>...</p>
          </div>
        </div>
      </div>
      <div className="Record-last">
        <div className="Record-last-left">Total of 200 pages</div>
        <div className="Record-last-Right">
          <p className="Record-last-Right-p">
            <FaAngleLeft />
          </p>
          <p className="Record-last-Right-p-main">1</p>
          <p className="Record-last-Right-p-main">2</p>
          <p className="Record-last-Right-p-three">3</p>
          <p className="Record-last-Right-p-main">4</p>
          <p className="Record-last-Right-p-main">...</p>
          <p className="Record-last-Right-p-main">200</p>
          <p className="Record-last-Right-p">
            <FaChevronRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
