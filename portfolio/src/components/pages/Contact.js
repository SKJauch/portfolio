import "../style/Body.css";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleValidation = (e) => {
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setErrorMessage("Your email is invalid");
      } else setErrorMessage("");
    } else {
      if (!e.target.value.lenth) {
        setErrorMessage("This field is required");
      } else setErrorMessage("");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("Email sent");

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <Form>
        <Row className="mb-3" >
      <Form.Group as={Col} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column="lg" lg={2}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleValidation}
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column="lg" lg={2}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleValidation}
          />
        </Form.Group>
       </Row>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label column="lg" lg={2}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleValidation}
            type="text"
            placeholder="Your message"
          />
        </Form.Group>
      
      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
</Form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
