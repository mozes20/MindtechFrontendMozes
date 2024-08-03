import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  handle(error: any): void {
    // Log the error, send it to a remote service, or perform other actions
    console.error('An error occurred:', error);
    // Optionally, re-throw the error or return a default value
    throwError('Something went wrong');
  }
}
