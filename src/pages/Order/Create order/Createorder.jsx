import React, { useState } from "react";
import "./Createorder.css";
import { Link, useNavigate } from "react-router-dom";

const Createorder = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    driver: "",
    address: "",
    serviceType: "",
    servicePackage: "",
    individualService: false,
    packageService: true,
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const validateForm = () => {
    let newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    }

    if (!formData.driver.trim()) {
      newErrors.driver = "Please assign a driver";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.serviceType.trim()) {
      newErrors.serviceType = "Select a service type";
    }

    if (!formData.servicePackage.trim()) {
      newErrors.servicePackage = "Select a package";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Order Created Successfully", formData);

      nav("/dashboard/orderdetails");
    }
  };

  return (
    <div className="order-container">
      <div className="order-modal">
        <div className="top">
          <h2>Create an Order</h2>

          <button className="close-btn">×</button>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />

            <small style={{ color: "red" }}>{errors.name}</small>
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

            <small style={{ color: "red" }}>{errors.email}</small>
          </div>

          <div className="form-group">
            <label>Mobile</label>

            <input
              type="text"
              name="mobile"
              placeholder="+234"
              value={formData.mobile}
              onChange={handleChange}
            />

            <small style={{ color: "red" }}>{errors.mobile}</small>
          </div>
          <div className="form-group">
            <label>Assign a Driver</label>

            <select
              name="driver"
              value={formData.driver}
              onChange={handleChange}
            >
              <option value="">Select an option</option>

              <option value="Driver 1">Driver 1</option>

              <option value="Driver 2">Driver 2</option>
            </select>

            <small style={{ color: "red" }}>{errors.driver}</small>
          </div>
          <div className="form-group full-width">
            <label>Address</label>

            <input
              type="text"
              name="address"
              placeholder="enter address"
              value={formData.address}
              onChange={handleChange}
            />

            <small style={{ color: "red" }}>{errors.address}</small>
          </div>
          <div className="service-section">
            <div className="service-left">
              <h4>Choose Service</h4>

              <div className="checkbox-group">
                <label>
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    name="individualService"
                    checked={formData.individualService}
                    onChange={handleChange}
                  />
                  Individual Service
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="packageService"
                    checked={formData.packageService}
                    onChange={handleChange}
                  />
                  Package
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Service Type</label>

              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="">Select an option</option>

                <option value="Wash & Fold">Wash & Fold</option>

                <option value="Dry Cleaning">Dry Cleaning</option>
              </select>

              <small style={{ color: "red" }}>{errors.serviceType}</small>
            </div>
            <div className="form-group">
              <label>Service Package</label>

              <select
                name="servicePackage"
                value={formData.servicePackage}
                onChange={handleChange}
              >
                <option value="">Select an option</option>

                <option value="Basic">Basic</option>

                <option value="Premium">Premium</option>
              </select>

              <small style={{ color: "red" }}>{errors.servicePackage}</small>
            </div>
          </div>
          <button className="submit-btn" type="submit">
            Create Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createorder;
