import {inject, Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "./authentication/services/auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  router = inject(Router);

  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // Allow access if the user is authenticated
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // Prevent access to the route
    }
  }
}
