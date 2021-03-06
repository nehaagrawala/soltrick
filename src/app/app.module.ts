import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgPMRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutisComponent } from './aboutis/aboutis.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ArticlesComponent } from './articles/articles.component';
import { LifestylesComponent } from './lifestyles/lifestyles.component';
import { QuotesComponent } from './quotes/quotes.component';
import { EducationComponent } from './education/education.component';
import { LoginComponent } from './login/login.component';
import { AuthService} from "../services";
import { AuthGuard } from "../guards";
import { FeedbackComponent } from './feedback/feedback.component';

import {StarRatingModule} from 'angular-star-rating'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutisComponent,
    ContactusComponent,
    ArticlesComponent,
    LifestylesComponent,
    QuotesComponent,
    EducationComponent,
    LoginComponent,
    FeedbackComponent
 
 

],
  imports: [
    BrowserModule,
    HttpModule,
    NgPMRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StarRatingModule.forRoot()
   
  ],
  providers: [ AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }