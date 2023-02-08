package com.examplespringcrudmongodb.service;

import java.util.List;

import com.examplespringcrudmongodb.model.Blog;

public interface IBlogService {
    
    Blog createBlog(Blog blog);
    
    List<Blog> findByTitle(String Title);

    Blog findById(String blogId);

    List<Blog> findAll();

    void deleteBlog(String id);

    Blog updateBlog(Blog blog);
}
