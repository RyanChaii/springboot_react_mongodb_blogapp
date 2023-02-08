import React from "react";
import { Col, ListGroup, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ListGroup>
      <Row>
        <Col>
          <Link to="/">Home</Link>
        </Col>
        <Col>
          <Link to="/add">Add Blog</Link>
        </Col>
        <Col>
          <Link to="/update">Update Blog</Link>
        </Col>
      </Row>
    </ListGroup>
  );
};

export default Menu;
