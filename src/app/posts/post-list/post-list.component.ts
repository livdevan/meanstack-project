import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   { title: 'First post', content: 'This is the first post\'s content' },
  //   { title: 'Second post', content: 'This is the second post\'s content' },
  //   { title: 'Third post', content: 'This is the third post\'s content' }
  // ];
  // postsService: PostsService; just add public keyword in the constructor
  // to gain the same result of assign this.postsService to constructor parameter
  constructor(public postsService: PostsService) {}

  @Input()
  posts: Post[] = [];
}
