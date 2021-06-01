import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./Login.css";

/**
 * Login Component
 * which holds email, password, error information and login button
 * @author ragesh
 *
 * @param {*} props holds email, password
 * @returns it returns book store page when successful
 */
const LoginForm = (props) => {
  //Holds email and password in details
  const [details, setDetails] = useState({ email: "", password: "" });

  /**
   * Validate email and password
   * @returns true or false
   */
  const validateForm = () => {
    return details.email.length > 0 && details.password.length > 0;
  };

  /**
   * Submitting the login event and send the user info to parent
   * @param {*} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(details);
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        {props.error !== "" ? (
          <Alert variant="danger">{props.error}</Alert>
        ) : (
          ""
        )}
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
        </Form.Group>
        <Button
          variant="dark"
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
