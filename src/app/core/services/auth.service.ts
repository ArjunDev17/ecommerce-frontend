import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  // FIXED — Now it accepts ONLY 2 params
  login(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post(`${this.api}/login`, payload);
  }

  register(name: string, email: string, password: string): Observable<any> {
    const payload = { name, email, password };
    return this.http.post(`${this.api}/register`, payload);
  }
}
