import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, AuthUser } from '../models/auth';
import { tap } from 'rxjs';
import { omit } from 'lodash';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private readonly urlApi = 'http://localhost:8080/auth/login';
  private router = inject(Router);


  accessToken = signal<string | null>(null);
  user = signal<AuthUser | null>(null);

  constructor() {
    this.loadUserTokenLocalStorage();
   }

  loadUserTokenLocalStorage() {
    const storedUser = localStorage.getItem('user');
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken && storedUser){
      this.user.set(JSON.parse(storedUser));
      this.accessToken.set(storedAccessToken);
    }
  }

  login(email: string, password: string): Observable<Auth> {
    return this.http.post<Auth>(this.urlApi, { email, password }).pipe(
      tap((res) => {
        this.setUser(res);
        this.setAccessToken(res);
      }),
    );
  }

  setUser(res: Auth){
    localStorage.setItem('user', JSON.stringify(omit(res, ['accessToken'])));
    this.user.set(omit(res, ['accessToken']));
  }
  setAccessToken(res: Auth){
    localStorage.setItem('accessToken', res.accessToken);
    this.accessToken.set(res.accessToken);
  }

  getUser(): AuthUser | null {
    return this.user();
  }

  getAccessToken(): string | null {
    return this.accessToken();
  }

  isAuthenticated() {
    const token = this.getAccessToken();
    console.log('Token:', token);
    return !!token;
}


  logout() {
    this.accessToken.set(null);
    this.user.set(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }
}
