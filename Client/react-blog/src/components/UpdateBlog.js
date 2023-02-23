import { Card, CardBody, CardTitle, Input, Container, Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import base_url from "../service/serviceapi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, state } from "react-router-dom";

const UpdateBlog = props => {
  const location = useLocation();

  const [blogId, setBlogId] = useState(location.state);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  async function retrievelBlogById(id) {
    try {
      // API call to retrieve blog by id
      const response = await Axios.get(`${base_url}/blogbyid`, { params: { blogId: id.blogid } });
      console.log(response);
      setBlogTitle(response.data.title);
      setBlogContent(response.data.content);
    } catch (e) {
      console.log(e);
      console.log("Error retrieving available blog");
    }
  }

  async function confirmBlogUpdate(e) {
    e.stopPropagation();
    e.preventDefault();
    try {
      // console.log(blogId);
      // console.log(blogTitle);
      // console.log(blogContent);
      console.log({ blogId: blogId.blogid, title: blogTitle, content: blogContent });
      // API call to retrieve blog by id
      const response = await Axios.put(`${base_url}/update`, { blogId: blogId.blogid, title: blogTitle, content: blogContent });
      console.log(response);
      // setBlogTitle(response.data.title);
      // setBlogContent(response.data.content);
    } catch (e) {
      console.log(e);
      console.log("Error updating blog");
    }
  }

  useEffect(() => {
    retrievelBlogById(blogId);
  }, []);
  return (
    <Card body inverse color="info">
      <CardBody>
        <form onSubmit={confirmBlogUpdate}>
          <CardTitle className="display-2">Update Blog</CardTitle>
          <Input placeholder="Enter the blog title here" onChange={e => setBlogTitle(e.target.value)} value={blogTitle} />
          <br />
          <Input type="textarea" rows="10" placeholder="Enter the blog content here" onChange={e => setBlogContent(e.target.value)} value={blogContent} />
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
