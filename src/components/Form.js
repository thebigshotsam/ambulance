import React from "react";
import { Card } from "react-bootstrap";

const Form = () => {
  return (
    <>
      {/* <h1 id="title">Dogluv Bakery Survey Form</h1>
      <p id="description">
        Thank you for taking time to help us keep improving!
      </p> */}
      <div id="survey-form">
        <div class="form-group">
          <label for="name" id="name-label">
            First Name
          </label>
          <br />
          <input
            type="text"
            id="fname"
            name="name"
            placeholder="Enter your First name"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="lname" id="name-label">
            Last Name
          </label>
          <br />
          <input
            type="text"
            id="lname"
            name="name"
            placeholder="Enter your Last name"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="phone" id="phone-label">
            Phone no.
          </label>
          <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone no."
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="number" id="number-label">
            Age
          </label>
          <br />
          <input type="number" id="number" name="number" placeholder="Age" />
        </div>
        <br />
        <br />
        <div class="form-group">
          <label for="gender" id="radio-label">
            Gender
          </label>
          <br />
          <div class="radio">
            <input id="male" name="gender" type="radio" />
            <label for="male" class="radio-label">
              Male
            </label>
          </div>
          <div class="radio">
            <input id="female" name="gender" type="radio" />
            <label for="female" class="radio-label">
              Female
            </label>
          </div>
          <div class="radio">
            <input id="other" name="gender" type="radio" />
            <label for="other" class="radio-label">
              Other
            </label>
          </div>
        </div>
        <br />
        <div class="form-group">
          <label for="contact" id="radio-label">
            Contact
          </label>
          <br />
          <div class="radio">
            <input id="YesContact" name="contact" type="radio" />
            <label for="YesContact" class="radio-label">
              Yes
            </label>
          </div>
          <div class="radio">
            <input id="NoContact" name="contact" type="radio" />
            <label for="NoContact" class="radio-label">
              No
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="fever" id="radio-label">
            Fever
          </label>
          <br />
          <div class="radio">
            <input id="YesFever" name="fever" type="radio" />
            <label for="YesFever" class="radio-label">
              Yes
            </label>
          </div>
          <div class="radio">
            <input id="NoFever" name="fever" type="radio" />
            <label for="NoFever" class="radio-label">
              No
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="drycough" id="radio-label">
            Dry Cough
          </label>
          <br />
          <div class="radio">
            <input id="YesDryCough" name="drycough" type="radio" />
            <label for="YesDryCough" class="radio-label">
              Yes
            </label>
          </div>
          <div class="radio">
            <input id="NoDryCough" name="drycough" type="radio" />
            <label for="NoDryCough" class="radio-label">
              No
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="breathe" id="radio-label">
            Difficulty in Breathe
          </label>
          <br />
          <div class="radio">
            <input id="YesBreathe" name="breathe" type="radio" />
            <label for="YesBreathe" class="radio-label">
              Yes
            </label>
          </div>
          <div class="radio">
            <input id="NoBreathe" name="breathe" type="radio" />
            <label for="NoBreathe" class="radio-label">
              No
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="throat" id="radio-label">
            Sour Throat
          </label>
          <br />
          <div class="radio">
            <input id="YesThroat" name="throat" type="radio" />
            <label for="YesThroat" class="radio-label">
              Yes
            </label>
          </div>
          <div class="radio">
            <input id="NoThroat" name="throat" type="radio" />
            <label for="NoThroat" class="radio-label">
              No
            </label>
          </div>
        </div>
        <br />
        <br />
        <br />
        <button name="accept" className="button accept">
          Submit
        </button>
      </div>
      <br />
      <br />
    </>
  );
};

export default Form;
