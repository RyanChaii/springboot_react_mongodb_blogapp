package com.examplespringcrudmongodb.controller;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.examplespringcrudmongodb.model.Blog;
import com.examplespringcrudmongodb.service.IBlogService;

@RestController
public class BlogController {

    @Autowired
    private IBlogService blogService;

    @CrossOrigin
    // Retrieve all blog
    @GetMapping("/all")
    public List<Blog> getAllBlogs(){
        return blogService.findAll();
    }

    // Get all blog by title
    @GetMapping("/title")
    public List<Blog> getBlogsByTitle(@RequestBody Map<String, String> json){
        var title = json.get("title");
        return blogService.findByTitle(title);
    }

    // Get blog by id
    // @CrossOrigin
    // @GetMapping("/blogbyid")
    // public Blog getBlogbyId(@RequestBody(required = false) Map<String, String> json){
    //     System.out.println("Helloo");
    //     var blogid = json.get("blogId");
    //     return blogService.findById(blogid);
    // }
    @CrossOrigin
    @GetMapping("/blogbyid")
    public Blog getBlogbyId(@RequestParam("blogId") String id){

        return blogService.findById(id);
    }

    // Create new blog
    @CrossOrigin
    @PostMapping("/create")
    public Blog create(@RequestBody Blog blog){
        blog.setBlogId(UUID.randomUUID().toString());
        return blogService.createBlog(blog);
    }

    // Update blog
    @CrossOrigin
    @PutMapping("/update")
    public Blog update(@RequestBody Blog blog){
        System.out.println(blog);
        return blogService.updateBlog(blog);
    }

    // Delete blog by id
    @CrossOrigin
    @DeleteMapping("/delete")
    @ResponseStatus(HttpStatus.OK)
    public void deleteById(@RequestParam("blogId") String id){
        blogService.deleteBlog(id);

    }
}
