import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ecmascript',
  templateUrl: './ecmascript.component.html',
  styleUrls: ['./ecmascript.component.scss'],
})
export class EcmascriptComponent {
  constructor(public router: Router, public http: HttpClient) {}

  ngOnInit(): void {}

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }
}
