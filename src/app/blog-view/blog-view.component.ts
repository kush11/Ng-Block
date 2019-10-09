import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;
  constructor(
    private _route: ActivatedRoute,
    private router: RouterModule,
    public blogService: BlogService,
    public blogHttpService: BlogHttpService) {
    console.log('COnstructer is called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    const { getSingleBlogInformation } = this.blogService;
    const myBlogId = this._route.snapshot.paramMap.get('blogId');
    // this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId);

    this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log('data of read', data);
        this.currentBlog = data['data'];
      },
      error => {
        console.log('error', error.errorMessage);
      }
    );
    console.log('individual block', this.currentBlog);
  }
  ngOnDestroy() {

  }


}
