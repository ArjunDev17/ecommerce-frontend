import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule
  ]
})
export class AddProductComponent {
  form!: FormGroup;

  categories = [
    'T-Shirts',
    'Jeans',
    'Shoes',
    'Winter Wear',
    'Accessories'
  ];

  previewImage: string | null = null;

  constructor(private fb: FormBuilder ,private service: ProductService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required]
    });
  }

  // Image handling
  onImageSelect(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.form.patchValue({ image: file });

    const reader = new FileReader();
    reader.onload = () => {
      this.previewImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }


onSubmit() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  this.service.addProductJson(this.form.value).subscribe({
    next: (res) => {
      console.log('API Response:', res);
      alert('Product Saved Successfully! 🎉');
    },
    error: (err) => {
      console.error('Error occurred:', err);
      alert('Something went wrong. Please try again.');
    }
  });

  console.log('Final form data:', this.form.value);
}


}
