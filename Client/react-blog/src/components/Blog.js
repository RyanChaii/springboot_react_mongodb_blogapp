import React, { useEffect, useState } from "react";
import { CardBody, CardText, Container, Button, Card, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import base_url from "../service/serviceapi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blog = props => {
  function deletedUpdate() {
    if (props.delete[0] === false) {
      props.delete[1](true);
    } else {
      props.delete[1](false);
    }
  }

  async function deleteBlog() {
    try {
      // API call to delete blog
      const response = await Axios.delete(`${base_url}/delete`, {
        params: {
          blogId: props.blog.blogId
        }
      });
      console.log(response);
      if (response.status === 200) {
        deletedUpdate();
        toast.info(props.blog.title + " have been deleted", { autoClose: 2000 });
      }
    } catch (e) {
      console.log(e);
      console.log("Error deleting blog");
    }
  }

  return (
    <Card body inverse color="info">
      <CardBody>
        <CardTitle className="font-weight-bold" style={{ color: "black" }}>
          <h4>{props.blog.title}</h4>
        </CardTitle>
        <CardText style={{ color: "black" }}>{props.blog.content}</CardText>
        <Container>
          {/* <Link className="btn btn-primary" to={{ pathname: "/update", state: { blogid: props.blog.blogId } }} style={{ marginRight: "15px" }}> */}
          <Link className="btn btn-primary" to="/update" state={{ blogid: props.blog.blogId }} style={{ marginRight: "15px" }}>
            Edit
          </Link>
          <Button
            color="danger"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              deleteBlog();
            }}
            type="submit"
          >
            Delete
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Blog;
