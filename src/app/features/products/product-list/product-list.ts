import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Product, ProductService } from '../../../core/services/product';

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

    products:any=[];
    constructor(private productService: ProductService) {}

    ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Error loading products:', err)
    });
  }

  addToCart(product: Product) {
    console.log('Add to cart:', product);
  }

//   products = [
//     { id:1, name:"Shirt", price:499, imageUrl:"https://via.placeholder.com/300" },
//     { id:2, name:"Shoes", price:999, imageUrl:"https://via.placeholder.com/300" }
//   ];
trackById(index: number, item: any) {
  return item.id;
}


}
