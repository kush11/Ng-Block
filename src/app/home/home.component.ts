import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBlogs = [];
  constructor(public blogService: BlogService, public blogHttpServices: BlogHttpService) { }

  ngOnInit() {
    // this.allBlogs = this.blogHttpServices.getAllBlogs();
    // console.log(this.allBlogs);
    this.allBlogs = this.blogHttpServices.getAllBlogs().subscribe(
      data => {
        console.log('data', data);
        this.allBlogs = data["data"];
      },
      error => {
        console.log('error', error.errorMessage);
      }
    );
    console.log('allBlogs', this.allBlogs);
  }

}
