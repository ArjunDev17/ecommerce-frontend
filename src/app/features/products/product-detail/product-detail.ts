import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
  imports: [
    MatCardModule,
    MatButtonModule
  ]
})
export class ProductDetailComponent {

  product: any;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = {
      id,
      name: "Sample Product " + id,
      price: 999,
      description: "This is a high-quality product with best materials.",
      imageUrl: "https://via.placeholder.com/400"
    };
  }

  addToCart() {
    alert("Added to cart!");
  }
}
