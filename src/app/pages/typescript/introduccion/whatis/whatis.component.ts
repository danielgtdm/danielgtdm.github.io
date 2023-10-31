import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-whatis',
  templateUrl: './whatis.component.html',
  styleUrls: ['./whatis.component.scss'],
})
export class WhatIsComponent {
  constructor(public router: Router, public http: HttpClient) {}

  ngOnInit(): void {}

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }
}
