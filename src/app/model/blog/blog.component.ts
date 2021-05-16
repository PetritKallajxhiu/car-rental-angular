import { Component, OnInit } from '@angular/core';
import {Blog, BlogServices} from '../../services/blogServices';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  constructor(private blogService: BlogServices) {
  }

  ngOnInit(): void {
    this.updateBlogs();
  }

  updateBlogs(): void {
    this.blogService.getAll().subscribe(response => {
      this.blogs = response;
    });
  }

  onDeleteBlog(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    console.log(shouldDelete);
    if (shouldDelete) {
      this.blogService.delete(id).subscribe(response => {
        this.updateBlogs();
      });
    }
  }

}
