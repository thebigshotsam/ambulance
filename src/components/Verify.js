import React from "react";
import { Card } from "react-bootstrap";
import { verifyOTP } from "../api/index";
const Verify = ({ contact, setRoute, setLoading, setAlert }) => {
  const [otp, setOtp] = React.useState();
  const handleClick = async () => {
    setLoading(true);
    const data = await verifyOTP(otp, contact);
    if (data.message && data.message === "Login Success") {
      setLoading(false);
      setAlert({ type: "success", content: "Verified", show: true });
      setRoute(2);
    } else {
      setLoading(false);
      setAlert({ type: "danger", content: "OTP not verified", show: true });
    }
  };
  return (
    <>
      <div className="container">
        <Card>
          <Card.Body>
            <div className="floating-placeholder">
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
              <label htmlFor="mobile">OTP</label>
            </div>
            <br />
            <br />
            <button name="accept" class="button accept" onClick={handleClick}>
              Verify
            </button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Verify;
