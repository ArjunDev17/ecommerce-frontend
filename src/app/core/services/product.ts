import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id?: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);

  private BASE_URL = 'http://localhost:9090/api/products';

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.BASE_URL, product);
  }
  

  update(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/${id}`, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
