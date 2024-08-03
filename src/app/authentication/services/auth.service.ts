import {inject, Injectable} from '@angular/core';
import {ApiService} from "../../api.service";
import {LoginDto} from "../../dto/login.dto";
import {RegistrationDto} from "../../dto/registration.dto";
import {ResponseDto} from "../../dto/response.dto";
import {ErrorDto} from "../../dto/error.dto";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {ErrorHandlerService} from "../../error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  router = inject(Router);
  errorMessages: string = "";



  constructor(private apiService:ApiService) { }

  login(data:LoginDto) {
    // login logic

  return this.apiService.post('auth/login', data)
  }

  register(data:RegistrationDto) {
    // register logic
    return this.apiService.post('auth/register', data)
  }

  logout() {
    localStorage.removeItem("authToken") // logout logic
    this.isLoggedIn = false;
    this.router.navigate(['/login']);

  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
