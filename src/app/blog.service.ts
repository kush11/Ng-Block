import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }
  public allBlogs = [
    {
      "blogId": '1',
      "tags": [],
      "created": '',
      "author": "admin",
      "category": "Comedy",
      "isPublish": true,
      "view": 0,
      "bodyHtml": "this is body",
      "description": "this is description of 1",
      "title": "This is block 1",
    },
    {
      "blogId": '2',
      "tags": [],
      "created": '',
      "author": "user",
      "category": "Comedy",
      "isPublish": true,
      "view": 0,
      "bodyHtml": "this is user body",
      "description": "this is description of 2",
      "title": "This is block 2",
    },
    {
      "blogId": '3',
      "tags": [],
      "created": '',
      "author": "admin",
      "category": "Comedy",
      "isPublish": true,
      "view": 0,
      "bodyHtml": "this is body",
      "description": "this is description of 3",
      "title": "This is block 3",
    },
    {
      "blogId": '4',
      "tags": [],
      "created": '',
      "author": "admin",
      "category": "Comedy",
      "isPublish": true,
      "view": 0,
      "bodyHtml": "this is body",
      "description": "this is description of 4",
      "title": "This is block 4",
    },
    {
      "blogId": '5',
      "tags": [],
      "created": '',
      "author": "admin",
      "category": "Comedy",
      "isPublish": true,
      "view": 0,
      "bodyHtml": "this is body",
      "description": "this is description of 5",
      "title": "This is block 5",
    }
  ];

  public currentBlog;


  public getAllBlogs(): any {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId === currentId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }

}
