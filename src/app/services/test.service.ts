import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // This ensures it's available everywhere
})
export class TestService {
  private apiUrl = 'http://localhost:5001/ArticleApplication/test';

  constructor(private http: HttpClient) {}

  testConnection() {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
