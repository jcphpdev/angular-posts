import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl = "https://jsonplaceholder.typicode.com/posts";
  
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.postUrl);
  }

  addPost(post) {
    return this.http.post(this.postUrl, post);
  }

  updatePost(post) {
    return this.http.put(this.postUrl+"/"+post.id, post);
  }

  deletePost(post) {
    return this.http.delete(this.postUrl+"/"+post.id);
  }
}
