import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HealthResponse } from './response.interface';

@Injectable({
  providedIn: 'root',
})
export class MockupService {
  url = `${environment.flaskHost}`;
  constructor(private http: HttpClient) {}

  getHealth(): Observable<HealthResponse> {
    const urlEndpoint = `${this.url}/health`;
    return this.http.get<HealthResponse>(urlEndpoint);
  }
}
