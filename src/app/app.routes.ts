import { Routes } from '@angular/router';
import {LoginComponent} from "./authentication/login/login.component";
import {RegistrationComponent} from "./authentication/registration/registration.component";
import {AuthGuard} from "./AuthGuard";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
];
