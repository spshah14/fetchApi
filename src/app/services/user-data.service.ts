import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}
  // url = 'https://jsonplaceholder.typicode.com/users';
  url = 'http://localhost:3000/users/';
  // url = 'http://localhost:3000/users';

  users() {
    return this.http.get(this.url);
  }
  saveUsers(data: any) {
    return this.http.post(this.url, data);
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  editUser(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
