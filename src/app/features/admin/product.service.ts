import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private BASE_URL = 'http://localhost:9090/api/products';

  constructor(private http: HttpClient) {}

  addProductJson(data: any): Observable<any> {
    return this.http.post(this.BASE_URL, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
