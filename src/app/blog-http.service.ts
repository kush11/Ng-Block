import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public token = 'MGU0NWQyN2Q3YTY3YjJhYWY4MjhiOTVkOTExZDUwYWU3ZGViM2Q3MGVkY2M2YzQzNjkwYWY1NTlhZWM5MzQyZjUxODc5OTM3ODg4YjJlZjBkMjI4NTFkMjQyODI3ZmFkNDE1NDJiZGI4MzA0Y2Q4ZjgzNGM3NjkxMzBlMWQxYjg3Nw==';

  constructor(private _http: HttpClient) {

  }

  public getAllBlogs(): any {
    const myResponse = this._http.get(this.baseUrl + `/all?authToken=${this.token}`);
    console.log('myResponse', myResponse);
    return myResponse;
  }
  public createBlog(blogData): any {
    const createResponse = this._http.post(this.baseUrl + `/create?authToken=${this.token}`, blogData)
    return createResponse;
  }

  public deleteBlog(blogId): any {
    const data = {};
    const deleteResponse = this._http.post(this.baseUrl + `/${blogId}/delete/?authToken=${this.token}`, data)
    return deleteResponse;
  }
  public editBlog(blogId, blogData): any {
    const editResponse = this._http.post(this.baseUrl + `/${blogId}/edit?authToken=${this.token}`, blogData);
    return editResponse;
  }

  public getSingleBlogInformation(currentId): any {
    const readResponse = this._http.get(this.baseUrl + `/view/${currentId}?authToken=${this.token}`);
    console.log('read data', readResponse);
    return readResponse;
    // for (let blog of this.allBlogs) {
    //   if (blog.blogId === currentId) {
    //     this.currentBlog = blog;
    //   }
    // }
    // console.log(this.currentBlog);
    // return this.currentBlog;
  }
}
