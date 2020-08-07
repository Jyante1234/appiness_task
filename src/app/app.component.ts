import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public usersList: any = [];
  public associatedReposList: any = [];
  public users: any = [];
  constructor(public userService: UsersService) { }

  ngOnInit() {
    this.getListOfUsers();
  }
  getListOfUsers() {
    this.userService.getAllUsers().subscribe(resp => {
      this.usersList = resp;
      this.users = resp;
    });
  }
  gerAssociatedRepos(user: any) {
    this.userService.gerAssociatedRepos(user.login).subscribe(associatedRepoResponse => {
      this.associatedReposList = associatedRepoResponse;
    })
  }
  cloneURL(url) {
    window.open(url, "_blank");
  }
  filterUser(event) {
    if (event.length) {
      this.usersList = this.users.filter(user => user.login.toLowerCase().includes(event.toLowerCase()));
    } else {
      this.usersList = this.users;
    }
  }
}
