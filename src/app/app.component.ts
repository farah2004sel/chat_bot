import { Component } from '@angular/core';
import { ChatbotComponent } from './chatbot/chatbot.component';  
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestService } from './services/test.service';  // Import the service


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ChatbotComponent ,TestService,HttpClientModule ],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //title = 'chatbot-angular';
    constructor(private testService: TestService) {}  // Inject the service here

}
