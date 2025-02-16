import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class ChatbotService {
  private apiUrl = 'http://localhost:5001/ArticleApplication/ask'; 

  constructor(private http: HttpClient) {}

  getChatbotResponse(question: string): Observable<string> {
    const params = new HttpParams().set('query', question);
    return this.http.post(this.apiUrl, null, { params, responseType: 'text' });
  }
}

