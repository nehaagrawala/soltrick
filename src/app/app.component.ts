import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "./shared";
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private currentUsername: string;
     private currentEmailId : string;
constructor(private authService: AuthService, private router: Router) {
    authService.newUser.subscribe((username: string,email:string) => {
      this.currentUsername = username;
      this.currentEmailId = email;
    });
  }


  isUserAuth() {
    return this.authService.isAuthenticated();
    
  }


  signOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
