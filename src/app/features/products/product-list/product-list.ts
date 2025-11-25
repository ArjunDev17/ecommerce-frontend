import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    RouterLink
  ]
})
export class ProductListComponent {

  products = [
    { id:1, name:"Shirt", price:499, imageUrl:"https://via.placeholder.com/300" },
    { id:2, name:"Shoes", price:999, imageUrl:"https://via.placeholder.com/300" }
  ];

  addToCart(product: any) {
    console.log("ADD TO CART", product);
  }
}
