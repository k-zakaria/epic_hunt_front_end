import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private urlApi: string = 'http://localhost:8080/v1/api';
  private http = inject(HttpClient);

  getPaginatedUsers(page: number, size: number): Observable<{ users: User[]; total: number }> {
    const url = `${this.urlApi}/users?page=${page}&size=${size}`;
    return this.http.get<{ content: User[]; totalElements: number }>(url).pipe(
      map((response) => ({
        users: response.content || [],
        total: response.totalElements || 0,
      }))
    );
  }

  deleteUser(id: string): Observable<void> {
    const url = `${this.urlApi}/users/delete/${id}`;
    return this.http.delete<void>(url);
  }
}