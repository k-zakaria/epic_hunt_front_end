import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginForm !: FormGroup;
  errorMessage = '';

  authService = inject(AuthService);
  router = inject(Router);

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, ]),
      password: new FormControl('', [Validators.required, ])
    })
  }

  submit() {
    this.errorMessage = '';
    if (this.loginForm.invalid) {
      console.error('Form is invalid');
      return;
    }
  
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (res) => {
        this.router.navigate(['/blog'])
      },
      error: (err) => {
        this.errorMessage = 'Email or Password is wrong !';
      },
    });
  }
  
}
