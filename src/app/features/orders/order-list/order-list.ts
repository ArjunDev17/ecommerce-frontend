import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-list',
  standalone: true,
  templateUrl: './order-list.html',
  styleUrl: './order-list.scss',
  imports: [CommonModule, MatTableModule, MatButtonModule]
})
export class OrderListComponent {
  displayedColumns = ['id', 'customer', 'amount', 'status', 'actions'];

  // replace with API call
  orders = [
    { id: 101, customer: 'Rohan', amount: 1499, status: 'PLACED' },
    { id: 102, customer: 'Sunita', amount: 2599, status: 'SHIPPED' },
    { id: 103, customer: 'Amit', amount: 499, status: 'DELIVERED' }
  ];

  view(o: any) {
    alert('Open order details for ' + o.id);
  }
}
