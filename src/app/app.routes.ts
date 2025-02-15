import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component'
import { GetToKnowMeComponent } from './get-to-know-me/get-to-know-me.component'
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Default home page 
    { path: 'work-experience', component: WorkExperienceComponent },
    { path: 'get-to-know-me', component: GetToKnowMeComponent}
];
