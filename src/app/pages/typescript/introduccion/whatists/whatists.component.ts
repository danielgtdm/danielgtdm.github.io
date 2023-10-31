import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-whatists',
  templateUrl: './whatists.component.html',
  styleUrls: ['./whatists.component.scss'],
})
export class WhatIsTSComponent {
  constructor(public router: Router, public http: HttpClient) {}

  ngOnInit(): void {}

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }
}
