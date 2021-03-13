import React from "react";
import { Card } from "react-bootstrap";
import { getOTP } from "../api/index";
const Login = ({ setRoute, setphone, setLoading, setAlert }) => {
  const [contact, setContact] = React.useState("");
  const handleClick = async () => {
    if (contact.length === 10) {
      console.log("ss");
      setContact("91" + contact);
    } else if (contact.length < 10) {
      setAlert({ type: "warning", content: "Enter valid number", show: true });
      return;
    }
    setLoading(true);
    const data = await getOTP();
    if (data.status && data.status === "pending") {
      setphone(contact);
      setLoading(false);
      setRoute(1);
    } else {
      setLoading(false);
      setAlert({ type: "primary", content: "Failed", show: true });
    }
    console.log(contact);
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
                  setContact(e.target.value);
                }}
              />
              <label htmlFor="mobile">Phone number</label>
            </div>
            <br />
            <br />
            <button
              name="accept"
              className="button accept"
              onClick={handleClick}
            >
              Send OTP
            </button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;
