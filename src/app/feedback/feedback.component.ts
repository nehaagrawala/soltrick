import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
 myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'username': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'comment' :['', [Validators.required]]
      
    })
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/feedback']);
    }
  }

  ngAfterViewInit() {
    this.myForm.reset();
  }

  Submit() {
    this.authService.signinUser(this.myForm.value);
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }
}
