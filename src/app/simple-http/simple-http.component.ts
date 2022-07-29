import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.scss']
})
export class SimpleHttpComponent implements OnInit {

  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  makeRequest(): void {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

}
