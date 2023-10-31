import { Component } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.scss'],
})
export class IntroduccionComponent {
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
        route = '/public/pages/typescript/que-es-javascript';
        break;

      case 1:
        route = '/public/pages/typescript/ecmascript';
        break;

      case 2:
        route = '/public/pages/typescript/que-es-typescript';
        break;

      default:
        break;
    }
    this.router.navigate([route]);
  }
}
