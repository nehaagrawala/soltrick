import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { LifestylesComponent } from './lifestyles/lifestyles.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutisComponent } from './aboutis/aboutis.component';
import { QuotesComponent } from './quotes/quotes.component';
import { EducationComponent } from './education/education.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
{path:"",component:HomeComponent,pathMatch:'full'},
{path: 'home', component: HomeComponent},
{path: 'aboutis',component:AboutisComponent},
{path:'articles',component:ArticlesComponent},
{path:'lifestyle',component:LifestylesComponent},
{path: 'contactus',component:ContactusComponent},
{path:'quotes',component: QuotesComponent},
{path:'education',component:EducationComponent },
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class NgPMRoutingModule { }