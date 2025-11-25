import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  imports: [
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    RouterLink
  ]
})
export class AdminDashboardComponent {
  // placeholder stats - replace with API call in ngOnInit
  stats = {
    products: 124,
    orders: 38,
    revenue: 542350
  };
}
