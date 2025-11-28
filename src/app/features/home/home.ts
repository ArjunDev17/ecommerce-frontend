import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToCustomer() {
    this.router.navigate(['/auth/login']);  // or '/login' based on your route
  }

  goToAdmin() {
    this.router.navigate(['/admin']); // change if you have different admin route
  }

}
