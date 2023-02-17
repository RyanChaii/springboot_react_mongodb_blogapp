import React, { useEffect, useState } from "react";
import { Card, CardTitle } from "reactstrap";
import Blog from "./Blog";
import Axios, { all } from "axios";
import base_url from "../service/serviceapi";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [deleteBlogUpdate, setDeleteBlogUpdate] = useState(false);

  async function getAllBlogs() {
    try {
      // API call wif username and password
      const response = await Axios.get(`${base_url}/all`);
      setBlogs(response.data);
    } catch (e) {
      console.log("Error retrieving available blog");
    }
  }

  useEffect(() => {
    document.title = "All Blog";
    getAllBlogs();
  }, [deleteBlogUpdate]);

  return (
    <Card body inverse color="info">
      <CardTitle className="display-2" style={{ backgroundColor: "#8f2d56" }}>
        All Blogs
      </CardTitle>
      {blogs.length > 0
        ? blogs.map(blog => {
            return <Blog key={blog.blogId} blog={blog} delete={[deleteBlogUpdate, setDeleteBlogUpdate]} />;
          })
        : "No blog available for showing"}
    </Card>
  );
};

export default AllBlogs;
