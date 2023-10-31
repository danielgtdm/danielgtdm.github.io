import { Component } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss'],
})
export class TypescriptComponent {
  blogsDetail: Blog[] = [];

  constructor(
    public service: ServiceblogService,
    public router: Router,
    public http: HttpClient
  ) {
    this.service.showEdit = false;
  }

  ngOnInit(): void {
    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe((d: any) => (this.service.Blogs = d));
  }

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }

  viewDetail(id: number) {
    let route = '';

    switch (id) {
      case 0:
        route = '/public/pages/typescript/introduccion';
        break;

      default:
        break;
    }
    this.router.navigate([route]);
  }
}
