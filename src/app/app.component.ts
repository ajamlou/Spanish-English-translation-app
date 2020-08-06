import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spanish';
  constructor(private router: Router) {}

  redirection() {
    this.router.navigate(['home', 'play']);
  }
}
