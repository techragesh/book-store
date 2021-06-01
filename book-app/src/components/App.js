import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import BookList from "../components/books/BookList";
import api from "../api/books";
import Header from "../components/header/Header";
import Book from "../components/books/Book";
import LoginForm from "../components/login/LoginForm";

/**
 * App Component
 * which holds all components to render, routing, invoke api to get books data in state
 * @author ragesh
 *
 * @returns all component
 */
function App() {
  /** Holds books in an array */
  const [books, setBooks] = useState([]);
  /** Holds search text */
  const [searchTerm, setSearchTerm] = useState("");
  /** Holds search results in an array */
  const [searchResults, setSearchResults] = useState([]);
  /** Holds email text */
  const [email, setEmail] = useState("");
  /** Holds error text */
  const [error, setError] = useState("");

  /** admin user info for login */
  const adminUser = {
    email: "admin@bookstore.com",
    password: "admin123"
  };

  /**
   * Login function to validate user info and handles the error
   * @param {*} details email and password
   */
  const login = details => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged In");
      setError("");
      setEmail(details.email);
    } else {
      console.log("Details not match");
      setError("Details not match");
    }
  };

  /** Logout function to reset the email */
  const logout = () => {
    console.log("logout");
    setEmail("");
  };

  /** Invoke api to retreive book list using json-mock server */
  const retrieveBooks = async () => {
    const response = await api.get("/books");
    return response.data;
  };

  /**
   * Search Function for search the books based on given input
   * @param {*} searchTerm search value
   */
  const searchHandler = searchTerm => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newBookList = books.filter(book => {
        return Object.values(book)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newBookList);
    } else {
      setSearchResults(books);
    }
  };

  useEffect(() => {
    const getAllBooks = async () => {
      const allBooks = await retrieveBooks();
      if (allBooks) setBooks(allBooks);
    };

    getAllBooks();
  }, []);

  useEffect(() => {}, [books]);

  return (
    <div className="container">
      <Router>
        <Header
          term={searchTerm}
          searchKeyword={searchHandler}
          email={email}
          logout={logout}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              email !== "" ? (
                <Redirect to="/books" />
              ) : (
                <LoginForm {...props} login={login} error={error} />
              )
            }
          />
          <Route path="/login" component={LoginForm} />
          <Route
            exact
            path="/books"
            render={props => (
              <BookList
                {...props}
                books={searchTerm.length < 1 ? books : searchResults}
                email={email}
              />
            )}
          />
          <Route path="/book/:id" component={Book} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
