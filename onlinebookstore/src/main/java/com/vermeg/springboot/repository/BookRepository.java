package com.vermeg.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vermeg.springboot.entity.Book;

/*
Author : Gharbi Med Aziz
*/
public interface BookRepository extends JpaRepository<Book, Long>{

}
