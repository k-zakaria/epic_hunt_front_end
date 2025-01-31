import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Competition } from '../models/competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private urlApi: String = 'http://localhost:8080/v1/api';
  private http = inject(HttpClient);

  getPaginatedCompetition(page: number, size: number): Observable<{ competitions: Competition[]; total: number }> {
    const url = `${this.urlApi}/competition?page=${page}&size=${size}`;
    return this.http.get<{ content: Competition[], totalElements: number }>(url).pipe(
      map((response) => ({
        competitions: response.content || [],
        total: response.totalElements || 0,
      }))
    );
  }
}
