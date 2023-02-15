import React, { useEffect, useState } from "react";
import { CardBody, CardText, Container, Button, Card, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const Blog = props => {
  return (
    <Card body inverse color="info">
      <CardBody>
        <CardTitle className="font-weight-bold">{props.blog.title}</CardTitle>
        {console.log("hi")}
        <CardText>{props.blog.content}</CardText>
        <Container>
          <Link className="btn btn-primary" to="/update" style={{ marginRight: "15px" }}>
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Blog;
