import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dog App';
  users: any;

  constructor(private http : HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://localhost:7081/api/User').subscribe({
      next: response => this.users = response,
      error: err => console.error(err),
      complete: () => console.log('Response has completed')
    })
    }

}
