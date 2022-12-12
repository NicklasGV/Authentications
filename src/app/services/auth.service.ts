import { Injectable} from '@angular/core';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginUser } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn1: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //private loggedIn: boolean = false;

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  /* get IsLoggedIn() {
    return this.loggedIn.asObservable();
  } */


loggedIn() {
  return !!localStorage.getItem('token')
}

  //* Login method
  login(user: LoginUser) {
    this.fireauth.signInWithEmailAndPassword(user.email, user.password).then( res => {
      localStorage.setItem('token', 'true');
      //this.loggedIn.next(true);
      // this.loggedIn = true;
      // localStorage.setItem('loggedIn', `${true}`);
      this.router.navigate(['homepage']);

      if(res.user?.emailVerified == true){
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['verify-email']);
      }
  }, err => {
    alert('Something went wrong, please try again')
    this.router.navigate(['/login']);
  });
}


//* register method
register(user: LoginUser) {
  this.fireauth.createUserWithEmailAndPassword(user.email, user.password).then( res => {
    alert('Registration successful')
    //this.loggedIn.next(false);
    //this.loggedIn = false;
    this.router.navigate(['/login']);
    this.sendEmailForVerification(res.user);
  }, err => {
    alert(err.message)
    this.router.navigate(['/register']);
  });
}

//* sign out
logout() {
  this.fireauth.signOut().then(() => {
    localStorage.removeItem('token');
    //this.loggedIn.next(false);
    //this.loggedIn = false;
        this.router.navigate(['/login']);
  }, err => {
    alert(err.message)
  });
}


//* forgot password

forgotPassword(user: LoginUser) {
  this.fireauth.sendPasswordResetEmail(user.email).then(() => {
    this.router.navigate(['/verify-email']);
  }, err => {
    alert('Something went wrong, please try again')
  });
}


//* Email Verfication
sendEmailForVerification(user : any) {
user.sendEmailVerification().then((res : any) => {
  this.router.navigate(['/verify-email']);
}, (err : any) => {
  alert('Something went wrong, not able to send email to given mail')
});
}


//* sign in with google
googleSignIn() {
  return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
    //this.loggedIn.next(true);
    //this.loggedIn = true;
    this.router.navigate(['/dashboard']);
    localStorage.setItem('token', JSON.stringify(res.user?.uid));
  }, err => {
    alert(err.message)
  });
}

facebookSignIn() {
  return this.fireauth.signInWithPopup(new FacebookAuthProvider).then(res => {
    this.router.navigate(['/dashboard']);
    localStorage.setItem('token', JSON.stringify(res.user?.uid));
  }, err => {
    alert(err.message)
  });
}
githubSignIn() {
  return this.fireauth.signInWithPopup(new GithubAuthProvider).then(res => {
    this.router.navigate(['/dashboard']);
    localStorage.setItem('token', JSON.stringify(res.user?.uid));
  }, err => {
    alert(err.message)
  });
}

getToken() {
  return localStorage.getItem('token');
}


}
