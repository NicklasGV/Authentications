import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new LoginUser();

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  register() {
    
    if (this.user.email == '') {
      alert('Please enter your email');
      return;
    }

    if (this.user.password == '') {
      alert('Please enter your password');
      return;
    }

    this.auth.register(this.user);
    this.user.email = '';
    this.user.password = '';
  }
}
