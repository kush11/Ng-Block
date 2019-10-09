import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogAboutComponent } from './blog-about/blog-about.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogAboutComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component: BlogAboutComponent },
      { path: 'create', component: BlogCreateComponent },
      { path: 'edit/:blogId', component: BlogEditComponent },
      { path: 'blog/:blogId', component: BlogViewComponent },
    ])
  ],
  providers: [BlogService, BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
