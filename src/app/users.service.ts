import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    public http: HttpClient,
  ) { }
  baseUrl = environment.baseUrl; // importing base url which is stored in environment file
  getAllUsers() {
    return this.http.get(this.baseUrl + 'users'); // getting all github users
  }
  gerAssociatedRepos(user) {
    return this.http.get(this.baseUrl + 'users/' + user + '/repos'); // getting all repositories associated with the user 
  }
}
