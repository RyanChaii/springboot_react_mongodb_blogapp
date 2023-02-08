package com.examplespringcrudmongodb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examplespringcrudmongodb.model.Blog;
import com.examplespringcrudmongodb.repository.BlogRepository;

@Service
public class BlogService implements IBlogService {
    
    @Autowired
    private BlogRepository blogRepository;

    @Override
    public Blog createBlog(Blog blog){
        return blogRepository.save(blog);
    }

    @Override
    public List<Blog> findByTitle(String title){
        List<Blog> blogList = blogRepository.findByTitle(title);
        return blogList;
    }

    @Override
    public List<Blog> findAll(){
        return blogRepository.findAll();
    }

    @Override
    public void deleteBlog(String id) {
        // TODO Auto-generated method stub
        System.out.println("Number 1");
        System.out.println(id);
        blogRepository.deleteById(id);
    }

    @Override
    public Blog updateBlog(Blog blog) {
        // TODO Auto-generated method stub
        return blogRepository.save(blog);
    }

    @Override
    public Blog findById(String blogId) {
        
        return blogRepository.findById(blogId).get();
    }
}
