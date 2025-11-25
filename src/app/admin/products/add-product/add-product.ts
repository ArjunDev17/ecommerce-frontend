import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from '../../../core/services/product';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatLabel,MatFormField,MatCard],   // ✅ IMPORTANT
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss'
})
export class AddProductComponent {

   form!: FormGroup;  // ✅ Proper declaration

  constructor(
    private fb1: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.form = this.fb1.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      stock: [null, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.productService.create(this.form.value).subscribe({
      next: (res) => {
        console.log('Product created:', res);
        alert('Product added successfully!');
        this.form.reset();
      },
      error: (err) => {
        console.error(err);
        alert('Error adding product');
      }
    });
  }
}
