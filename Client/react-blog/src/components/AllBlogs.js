import React, { useEffect, useState } from "react";
import { Card, CardTitle } from "reactstrap";
import Blog from "./Blog";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([
    { blogId: "44332211", title: "Demo Blog", content: "Blog for all the different country" },
    { blogId: "12345678", title: "Demo Blog 2", content: "Blog for all the different Food in the world" }
  ]);

  // function getDemoBlog() {
  //   setBlogs([{ blogId: "44332211", title: "Demo Blog", content: "Show are your foodie here" }]);
  // }

  // useEffect(() => {
  //   document.title = "All Blog";
  //   getDemoBlog();
  // }, []);

  return (
    <Card body inverse color="info">
      <CardTitle className="display-2">All Blogs</CardTitle>
      {blogs.length > 0
        ? blogs.map(blog => {
            return <Blog key={blog.blogId} blog={blog} />;
          })
        : "No blog available for showing"}
    </Card>
  );
};

export default AllBlogs;
