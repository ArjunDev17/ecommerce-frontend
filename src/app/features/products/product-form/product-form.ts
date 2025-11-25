import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-form',
  standalone: true,
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ]
})
export class ProductFormComponent {

  form: any;
  isEdit = false;
  productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // FIXED HERE
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      description: [''],
      imageUrl: ['']
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEdit = true;
      this.productId = Number(idParam);
      this.loadProduct(this.productId);
    }
  }

  loadProduct(id: number) {
    const mock = {
      name: 'Demo Product ' + id,
      price: 999,
      description: 'Demo description',
      imageUrl: 'https://via.placeholder.com/400'
    };
    this.form.patchValue(mock);
  }

  save() {
    if (this.form.invalid) return;
    const payload = this.form.value;

    if (this.isEdit) console.log("UPDATE", payload);
    else console.log("CREATE", payload);

    this.router.navigate(['/admin']);
  }
}
