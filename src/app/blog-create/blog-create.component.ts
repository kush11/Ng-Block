import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(public blogHttpService: BlogHttpService) { }

  public blogTitle: string;
  public blogBody: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategory = ['Comedy', 'Drama', 'Action', 'Technology'];
  ngOnInit() {

  }

  public createBlog(data): any {
    console.log(data);
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBody,
      category: this.blogCategory
    };
  }

  // this.blogHttpService.createBlog(blogData).subscribe(
  //   data => {
  //     console.log('data of read', data);
  //   },
  //   error => {
  //     console.log('error', error.errorMessage);
  //   }
  // );

}
