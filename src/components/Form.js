import React from "react";

const Form = () => {
  return (
    <>
      <div className="container">
        <Card>
          <Card.Body>
            <div className="floating-placeholder">
              <input id="mobile" name="mobile" type="tel" required />
              <label htmlFor="mobile">Phone number</label>
            </div>
            <button>Submit</button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Form;
