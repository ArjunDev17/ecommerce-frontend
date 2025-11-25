import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule,RouterLink,RouterOutlet],   // ✅ REQUIRED
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class AdminComponent {}
