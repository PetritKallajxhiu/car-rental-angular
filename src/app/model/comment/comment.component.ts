import {Component, OnInit} from '@angular/core';
import {CommentService, Comment} from '../../services/CommentServices';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.updateComments();
  }

  updateComments(): void {
    this.commentService.getAll().subscribe(data => {
      this.comments = data;
    });
  }

  onDeleteComment(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    console.log(shouldDelete);
    if (shouldDelete) {
      this.commentService.delete(id).subscribe(response => {
        this.updateComments();
      });
    }
  }
}
