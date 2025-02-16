import { Component } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test-connection',
  templateUrl: './test-connection.component.html',
  styleUrls: ['./test-connection.component.css']
})
export class TestConnectionComponent {
  responseMessage: string = '';

  constructor(private testService: TestService) {}

  checkConnection() {
    this.testService.testConnection().subscribe(
      (response) => {
        this.responseMessage = response;
      },
      (error) => {
        this.responseMessage = 'Connection failed!';
        console.error(error);
      }
    );
  }
}
