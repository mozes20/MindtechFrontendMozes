import { Component } from '@angular/core';
import {AuthService} from "../authentication/services/auth.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(protected authService: AuthService) {

  }

}
