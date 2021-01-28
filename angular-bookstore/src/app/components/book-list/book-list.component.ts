import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  currentCategoryId: number;
  constructor(private bookService: BookService, private activatedRouted: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(() => {
      this.listBooks();
    })
  }

  listBooks() {
    const hasCategoryId: boolean = this.activatedRouted.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId = +this.activatedRouted.snapshot.paramMap.get('id');
    }else{
      this.currentCategoryId = 0;
    }
    this.bookService.getBooks(this.currentCategoryId).subscribe(res => {
      this.books = res;
    })
  }

}
