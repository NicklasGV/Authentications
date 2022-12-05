import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  user = new LoginUser();

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }


  forgotPassword() {
    this.auth.forgotPassword(this.user);
    this.user.email = '';
  }

}
