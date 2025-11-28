import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

/**
 * Standalone Register Component (Angular 17+)
 */
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {

  username: string = '';
  email: string = '';
  password: string = '';

  loading: boolean = false;
  message: string = '';
  error: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  register(): void {
    this.error = '';
    this.message = '';

    if (!this.username?.trim() || !this.email?.trim() || !this.password) {
      this.error = 'All fields are required';
      return;
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.error = 'Invalid email format';
      return;
    }

    this.loading = true;

    const payload = {
      username: this.username.trim(),
      email: this.email.trim(),
      password: this.password
    };

    this.auth.register(payload).subscribe({
      next: () => {
        this.loading = false;
        this.message = 'Registration successful! Redirecting to login...';

        // Clear form
        this.username = '';
        this.email = '';
        this.password = '';

        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 1200);
      },
      error: (err: any) => {
        this.loading = false;

        if (typeof err?.error === 'string') {
          this.error = err.error;
        } else {
          this.error = 'Registration failed — username or email may already exist';
        }
      }
    });
  }
}
