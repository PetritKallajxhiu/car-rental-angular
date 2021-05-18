import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Car, CarServices} from '../../../services/carServices';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadService} from '../../../services/upload.service';
import {CommentServices, Comment} from '../../../services/commentServices';

@Component({
  selector: 'app-comment-manage',
  templateUrl: './comment-manage.component.html',
  styleUrls: ['./comment-manage.component.css']
})
export class CommentManageComponent implements OnInit {
  commentForm = new FormGroup({});

  cars: Car[] = [];

  constructor(private carService: CarServices, private router: Router,
              private http: HttpClient, private activeRoute: ActivatedRoute,
              private commentService: CommentServices, private uploadService: UploadService) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id
    ) {
      this.commentService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((comment) => {
          this.commentForm = this.createCommentForm(comment);
        });
    } else {
      this.commentForm = this.createCommentForm({} as Comment);
    }
    this.carService.getAll().subscribe(data => {
      this.cars = data;
    });
  }

  createCommentForm(comment: Comment):
    FormGroup {
    return new FormGroup({
      id: new FormControl(comment.id),
      name: new FormControl(comment.name, Validators.required),
      rate: new FormControl(comment.rate, [Validators.min(1), Validators.max(5)]),
      content: new FormControl(comment.content, Validators.required),
      carId: new FormControl(comment.carId, Validators.required),
      photo: new FormControl(comment.photo, Validators.required),
    });
  }

  onSubmit(): void {
    this.commentService.save(this.commentForm.value)
      .subscribe(response => {
        return this.router.navigate(['/comments']);
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
          this.commentForm.patchValue({
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
