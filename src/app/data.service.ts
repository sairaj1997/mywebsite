import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  login(usr) {

    return this.http.post('http://localhost:3000/login', usr);

  }
  register(usr){
    return this.http.post('http://localhost:3000/register', usr);
  }
}

