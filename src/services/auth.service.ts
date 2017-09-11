import { Router } from '@angular/router';
import {Injectable, EventEmitter} from '@angular/core';
import {User} from "../app/shared";
import {Output} from "@angular/core";

@Injectable()
export class AuthService {
    private isAuth = false;
    private signedInUser: User;
    @Output() newUser = new EventEmitter<string>();

    constructor(private router: Router) {}

    signinUser(user: User) {
        this.isAuth = true;
        this.signedInUser = user;
         this.newUser.emit(user.username);
        // this.newUser.emit(user.email);
    }

    currentUsername(): string {
        return this.signedInUser.username;
    }
     currentEmailId(): string{
          return this.signedInUser.email;
     }

    isAuthenticated() {
        return this.isAuth;
    }

    logout() {
        this.isAuth = false;
        this.router.navigate(['/login']);
    }
}