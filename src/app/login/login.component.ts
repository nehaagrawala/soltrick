import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'username': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'gender': ['',[Validators.required]]
    })
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  ngAfterViewInit() {
    this.myForm.reset();
  }

  signIn() {
    this.authService.signinUser(this.myForm.value);
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/feedback']);
    }
  }
}
