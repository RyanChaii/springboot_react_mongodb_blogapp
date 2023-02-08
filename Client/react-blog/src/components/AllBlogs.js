import React, { useState } from "react";
import { Card, CardTitle } from "reactstrap";
import Blog from "./Blog";

const AllBlogs = () => {
  const { blogs, setBlogs } = useState([]);

  return (
    <Card body inverse color="info">
      <CardTitle className="display-2">All Blogs</CardTitle>
      {blogs.length > 0
        ? blogs.map(blog => {
            <Blog key={blog.blogId} blog={blog} />;
          })
        : "No blog available for showing"}
    </Card>
  );
};

export default AllBlogs;
