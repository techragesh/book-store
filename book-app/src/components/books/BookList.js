import React from "react";
import Book from "./Book";
import { Row, Col, Alert } from "react-bootstrap";

/**
 * BookList Component
 * which holds books list and send those info to child component
 * @author ragesh
 *
 * @param {*} props holds books list
 * @returns Book info
 */
const BookList = props => {
  /** iterate book list */
  const renderBookList = props.books.map(book => {
    return (
      <Col xs={6} md={4}>
        <Book book={book} key={book.id}></Book>
      </Col>
    );
  });
  return (
    <div>
      <Row>
        {renderBookList.length > 0 && props.email !== "" ? (
          renderBookList
        ) : (
          <Col className="no-books-text">
            <Alert variant="danger">No Records Available</Alert>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default BookList;
