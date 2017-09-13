import {Component, OnInit,Input,Output, AfterViewInit,EventEmitter} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OnClickEvent} from 'angular-star-rating';
@Component({
  selector: 'app-feedback',
  
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
 myForm: FormGroup;
 
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
     
      'comment' :['', [Validators.required]],
      'rating' :['', [Validators.required]]
    })
    
  }

  ngOnInit() {
    
      this.router.navigate(['/feedback']);
    
  }



  Submit() {
   
      this.router.navigate(['/home']);
   
  }
 
  onClickResult:OnClickEvent;
  

    onClick = ($event:OnClickEvent) => {
       
        this.onClickResult = $event;
    };

 
   

  

  
 
}
