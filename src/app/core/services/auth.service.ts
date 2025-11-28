import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private tokenKey = 'auth_token';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(
    private http: HttpClient,
    private api: ApiService
  ) {}

  register(payload: any) {
    return this.http.post(
      this.api.getUrl('/api/register'),
      payload
    );
  }

  login(payload: any) {
    return this.http.post<{ token: string }>(
      this.api.getUrl('/api/auth/login'),
      payload
    ).pipe(
      tap(res => {
        if (res?.token) {
          localStorage.setItem(this.tokenKey, res.token);
          this.isLoggedInSubject.next(true);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedInSubject.next(false);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  private hasToken() {
    return !!localStorage.getItem(this.tokenKey);
  }
}
