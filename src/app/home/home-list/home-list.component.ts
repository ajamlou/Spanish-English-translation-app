import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('HOME');
  }

  redirection() {
    this.router.navigate(['home', 'play']);
  }
}
