import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url = 'http://localhost:3000/students' ;


  constructor(private http : HttpClient) {}

  getAlluser() {
    return this.http.get(this.url);
  }
}
