import React, { useRef } from "react";
import { Navbar, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * Header Component
 * which holds label, welome user text, search bar and logout button
 * @author ragesh
 *
 * @param {*} props holds email
 * @returns header
 */
const Header = props => {
  /** Returns mutable object which is initialized to pass arg and it will persist for full lifetime of the component */
  const inputEl = useRef("");

  /**
   * Search function which return text to parent
   */
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  /**
   * Logout function which clears user info
   */
  const logout = () => {
    props.logout("");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <h1>Book Store</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        {props.email !== "" ? (
          <Navbar.Text style={{ paddingRight: 10 }}>
            Welcome {props.email}
          </Navbar.Text>
        ) : (
          ""
        )}
        {props.email !== "" ? (
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              A
              className="mr-sm-2"
              ref={inputEl}
              value={props.term}
              onChange={getSearchTerm}
            />
            <Button variant="outline-success">Search</Button>
            <Link to="/">
              <Button variant="dark" onClick={logout}>
                Logout
              </Button>
            </Link>
          </Form>
        ) : (
          ""
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
