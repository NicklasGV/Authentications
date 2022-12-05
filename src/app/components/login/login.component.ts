import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { LoginUser } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new LoginUser();

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  login() {
    
    if (this.user.email == '') {
      alert('Please enter your email');
      return;
    }

    if (this.user.password == '') {
      alert('Please enter your password');
      return;
    }

    this.auth.login(this.user);
    this.user.email = '';
    this.user.password = '';
}

signInWithGoogle() {
  this.auth.googleSignIn();
}

}
