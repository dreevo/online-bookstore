package com.vermeg.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.vermeg.springboot.entity.Book;

/*
Author : Gharbi Med Aziz
*/
@CrossOrigin("http://localhost:4200")
public interface BookRepository extends JpaRepository<Book, Long>{

}
