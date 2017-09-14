import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "./shared";
import { LoginComponent } from './login/login.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private currentUsername: string;
     
constructor(private authService: AuthService, private router: Router) {
    authService.newUser.subscribe((username: string) => {
      this.currentUsername = username;
      
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