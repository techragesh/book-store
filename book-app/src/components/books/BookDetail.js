import React from "react";
import { Modal, Button } from "react-bootstrap";

/**
 * BookDetail Component
 * which holds details information of the book in modal page
 * @author ragesh
 *
 * @param {*} props holds info of the book
 * @returns Book info
 */
const BookDetail = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ISBN {props.book.id} - {props.book.title} - {props.book.author}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Summary</h4>
        <p>{props.book.summary}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookDetail;
