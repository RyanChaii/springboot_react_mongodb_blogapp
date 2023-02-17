import { Card, CardBody, CardTitle, Input, Container, Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import base_url from "../service/serviceapi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, state } from "react-router-dom";

const UpdateBlog = props => {
  const location = useLocation();

  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  async function confirmBlogUpdate(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log("Hi");
  }

  useEffect(() => {
    console.log(location.state);
  }, []);
  return (
    <Card body inverse color="info">
      <CardBody>
        <form onSubmit={confirmBlogUpdate}>
          <CardTitle className="display-2">Update Blog</CardTitle>
          <Input placeholder="Enter the blog title here" onChange={e => setBlogTitle(e.target.value)} />
          <br />
          <Input type="textarea" rows="10" placeholder="Enter the blog content here" onChange={e => setBlogContent(e.target.value)} />
          <br />
          <Container>
            <Button type="submit" color="success" style={{ marginRight: "15px" }} size="lg">
              Accept Changes
            </Button>
            <Link to="/">
              <Button color="warning" size="lg">
                Cancel
              </Button>
            </Link>
          </Container>
        </form>
      </CardBody>
    </Card>
  );
};

export default UpdateBlog;
