import { Card, CardBody, CardTitle, Input, Container, Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import base_url from "../service/serviceapi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  async function postBlog(e) {
    e.stopPropagation();
    e.preventDefault();
    const response = await Axios.post(`${base_url}/create`, { title: blogTitle, content: blogContent });
    console.log(response);
  }

  function clearBlog() {
    setBlogTitle("");
    setBlogContent("");
    document.getElementById("blog_title").value = "";
    document.getElementById("blog_content").value = "";
  }

  return (
    <Card body inverse color="info">
      <CardBody>
        <form onSubmit={postBlog}>
          <CardTitle className="display-2">New Blog</CardTitle>
          <Input id="blog_title" placeholder="Enter the blog title here" onChange={e => setBlogTitle(e.target.value)} type="text" required />
          <br />
          <Input id="blog_content" type="textarea" rows="10" placeholder="Enter the blog content here" onChange={e => setBlogContent(e.target.value)} required />
          <br />
          <Container>
            <Button type="submit" color="success" style={{ marginRight: "15px" }} size="lg">
              Post Blog
            </Button>
            <Button
              type="submit"
              color="warning"
              size="lg"
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                clearBlog();
              }}
            >
              Clear
            </Button>
          </Container>
        </form>
      </CardBody>
    </Card>
  );
};

export default AddBlog;
