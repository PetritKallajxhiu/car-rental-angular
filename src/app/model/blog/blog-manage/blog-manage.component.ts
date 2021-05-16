import { Component, OnInit } from '@angular/core';
import { Blog, BlogServices } from 'src/app/services/blogServices';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {UploadService} from '../../../services/upload.service';

@Component({
  selector: 'app-blog-manage',
  templateUrl: './blog-manage.component.html',
  styleUrls: ['./blog-manage.component.css']
})
export class BlogManageComponent implements OnInit {
  blogForm= new FormGroup({});

  constructor(private blogService: BlogServices, private router: Router, private uploadService: UploadService,
    private http: HttpClient, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id
      ) {
        this.blogService.getById(this.activeRoute.snapshot.params.id)
          .subscribe((blog) => {
            this.blogForm = this.createBlogForm(blog);
          });
      } else {
        this.blogForm = this.createBlogForm({} as Blog);
      }
  }

  createBlogForm(blog: Blog):
  FormGroup {
  return new FormGroup({
    id: new FormControl(blog.id),
    author: new FormControl(blog.author, Validators.required),
    title: new FormControl(blog.title, Validators.required),
    content: new FormControl(blog.content, Validators.required),
    photo: new FormControl(blog.photo, Validators.required),
  });
}

onSubmit(): void {
  this.blogService.save(this.blogForm.value)
    .subscribe(response => {
      return this.router.navigate(['/blogs']);
    });
}

onFileSelected(event: any): void {
  const file: File | null = event.target.files.item(0);
  if (!file) {
    return;
  }
  this.uploadService.upload(file).subscribe(
    (httpEvent: any) => {
      if (httpEvent.type === HttpEventType.UploadProgress) {
        console.log(Math.round(100 * event.loaded / event.total));
      } else if (httpEvent instanceof HttpResponse) {
        this.blogForm.patchValue({
          photo: file.name,
        });
      }
    },
    (err: any) => {
      console.log(err);
      alert('Error uploading file');
    });
}

}
