package com.examplespringcrudmongodb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.examplespringcrudmongodb.model.Blog;


@Repository
public interface BlogRepository extends MongoRepository<Blog, String>{
    @Query("{'title':?0}")
    public List<Blog> findByTitle(String title);

    // @Query("{'id':?0}")
    // public List<Blog> findByTitle(String title);

}
