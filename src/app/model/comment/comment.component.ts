import {Component, OnInit} from '@angular/core';
import {CommentServices, Comment} from '../../services/commentServices';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];


  constructor(private commentService: CommentServices) {
  }

  ngOnInit(): void {
    this.updateComments();
  }

  updateComments(): void {
    this.commentService.getAll().subscribe(response => {
      this.comments = response;
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
