import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userInput: string = '';
  chatbotResponse: string = '';
  messages: string[] = [];

  constructor(private http: HttpClient) {} 
  askQuestion() {
    if (this.userInput) {
      this.messages.push('You: ' + this.userInput);
      this.getChatbotResponse(this.userInput).subscribe((response: { answer: string }) => {
        this.chatbotResponse = response.answer;
        this.messages.push('Chatbot: ' + this.chatbotResponse);
        this.userInput = '';
      });
    }
  }

  getChatbotResponse(question: string): Observable<any> {
    return this.http.post<any>('http://localhost:5001', { question }); 
  }
}
