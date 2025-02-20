import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component'
import { GetToKnowMeComponent } from './get-to-know-me/get-to-know-me.component'
import {  MyProjectsComponent } from './my-projects/my-projects.component'
import { ContactComponent } from './contact/contact.component'
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Default home page 
    { path: 'work-experience', component: WorkExperienceComponent },
    { path: 'get-to-know-me', component: GetToKnowMeComponent}, 
    { path: 'my-projects', component: MyProjectsComponent},
    { path: 'contact', component: ContactComponent }
];
