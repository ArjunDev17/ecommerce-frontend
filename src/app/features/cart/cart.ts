import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CartComponent {

  cart = [
    { id:1, name:"Shirt", price:499 },
    { id:2, name:"Shoes", price:999 }
  ];

  get total() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  remove(item: any) {
    this.cart = this.cart.filter(i => i.id !== item.id);
  }
}
