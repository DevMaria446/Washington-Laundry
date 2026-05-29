import React, { useState, useRef } from "react";
import "../../pages/code/code.css";
import { FaKey } from "react-icons/fa";
import { useNavigate } from "react-router";

const Code = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const nav = useNavigate();

  const Code = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef([]);

    const handleChange = (value, index) => {
      if (!/^\d*$/.test(value)) return;

      const newOtp = [...otp];
      newOtp[index] = value.slice(-1);
      setOtp(newOtp);

      // Move to next input
      if (value && index < 3) {
        inputs.current[index + 1].focus();
      }
    };

    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputs.current[index - 1].focus();
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const code = otp.join("");

      if (code.length < 4) {
        alert("Please enter complete verification code");
        return;
      }

      alert(`Verification Code Submitted: ${code}`);
      nav("/dashboard");
    };

    return (
      <div className="code-container">
        <div className="code-card">
          <div className="icon-box">
            <FaKey className="key-icon" />
          </div>

          <h2>Enter Verification Code</h2>

          <p>
            A code has been sent to <strong>james@email.com</strong>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  ref={(el) => (inputs.current[index] = el)}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>

            <button
              type="submit"
              className="submit-btn=1"
              onClick={() => nav("/dashboard")}
            >
              Submit
            </button>
          </form>

          <div className="resend-text">
            Didn’t receive the code? <span>Resend code</span>
          </div>
        </div>
      </div>
    );
  };
};

export default Code;
