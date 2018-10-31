import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  formVisible = false;
  editMode = false;
  posts = [];
  post = {
    title: '',
    body: ''
  };
  
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  showForm() {
    this.formVisible = !this.formVisible;
  }

  getPosts() {
    this.postService.getPosts().subscribe(
      response => {
        console.log(response.json());
        this.posts = response.json();
      }
        
    );
  }

  addPost() {
    this.postService.addPost(this.post).subscribe(
      response => {
        console.log(response.json());
        this.post = {
          title: '',
          body: ''
        };
        this.formVisible = false;
        this.posts.unshift(response.json());
      }
        
    );
  }

  editPost(post) {
    this.formVisible = true;
    this.editMode = true;
    this.post = post;
  }

  updatePost() {
    this.postService.updatePost(this.post).subscribe(
      response => {
        console.log(response.json());
        this.post = {
          title: '',
          body: ''
        };
        this.formVisible = false;
      }
        
    );
  }

  deletePost(post) {
    this.postService.deletePost(post).subscribe(
      response => {
        console.log(response.json());
        let index = this.posts.indexOf(post); 
        this.posts.splice(index, 1);
      }
        
    );
  }

}
