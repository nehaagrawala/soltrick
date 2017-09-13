import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { LifestylesComponent } from './lifestyles/lifestyles.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutisComponent } from './aboutis/aboutis.component';
import { QuotesComponent } from './quotes/quotes.component';
import { EducationComponent } from './education/education.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "../guards";


const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path: '', component: HomeComponent, pathMatch: 'full'},
{path:'feedback',component:FeedbackComponent},
{path: 'home', component: HomeComponent},
{path: 'aboutis',component:AboutisComponent},
{path:'articles',component:ArticlesComponent},
{path:'lifestyle',component:LifestylesComponent},
{path: 'contactus',component:ContactusComponent},
{path:'quotes',component: QuotesComponent},
{path:'education',component:EducationComponent},
{path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class NgPMRoutingModule { }