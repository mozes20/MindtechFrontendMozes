import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ApiService} from "../../api.service";
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {LoginDto} from "../../dto/login.dto";
import {ResponseDto} from "../../dto/response.dto";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorDto} from "../../dto/error.dto";
import {ErrorHandlerService} from "../../error-handler.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;
  router = inject(Router);


  constructor(private fb: FormBuilder, private authService: AuthService,private errorHandler:ErrorHandlerService) {
    this.loginForm = this.fb.group({
      username: ['Mozes', Validators.required],
      password: ['Proba123', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {

        this.authService.login(new LoginDto(this.loginForm.value.username, this.loginForm.value.password)).subscribe({
          next: (response) => {
            this.authService.isLoggedIn = true;
            localStorage.setItem('authToken', (response as ResponseDto).data);
            this.router.navigate(['/']).then(r => console.log(r));
          },
          error: (error: HttpErrorResponse) => {
            //console.log(error.status);
            this.errorHandler.handle(error);
            this.loginError = true;
          }
        });


    }
  }
}
