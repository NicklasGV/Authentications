import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //isLoggedIn$?: Observable<boolean>;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    //this.isLoggedIn$ = this.authService.IsLoggedIn;
    //this.isLoggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    /* while (this.authService.loggedIn()) {
      this.isLoggedIn = true;
    } */
    if(this.authService.loggedIn()) {
      this.isLoggedIn = true;
    }
  }

  checkLogin() {
    if(this.authService.loggedIn()) {
      this.isLoggedIn = true;
    }
  }

  WIP() {
    alert('THIS IS A WORK IN PROGRESS')
  }

  register() {
    this.authService.logout();
  }

}
