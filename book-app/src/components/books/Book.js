import React, { useState } from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import BookDetail from "./BookDetail";

/**
 * Book Component
 * which holds information of the book and displayed in card
 * @author ragesh
 *
 * @param {*} props holds info of the book
 * @returns Book info
 */
const Book = props => {
  const [modalShow, setModalShow] = useState(false);
  const { title, author, summary, image } = props.book;

  return (
    <CardDeck className="card-deck">
      <Card className="card-size">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {title} - <small className="text-muted">{author}</small>
          </Card.Title>
          <Card.Text className="description-text">{summary}</Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Detail View
          </Button>
          <BookDetail
            show={modalShow}
            onHide={() => setModalShow(false)}
            book={props.book}
          />
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default Book;
