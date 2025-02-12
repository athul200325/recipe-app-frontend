import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const reqBody = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.api.loginAPI(reqBody).subscribe({
        next: (res: any) => {
          console.log("Login Response:", res); // Debugging: Check API response

          // Store user & token in session storage
          sessionStorage.setItem("user", JSON.stringify(res.user)); 
          sessionStorage.setItem("token", res.token);

          this.loginForm.reset();

          if (res.user.role === "user") {
            alert("Login Successful");
            this.router.navigateByUrl('/');
          } else {
            alert("Admin Login Successful");
            this.router.navigateByUrl('/admin');
          }
        },
        error: (error: any) => {
          console.error("Login Error:", error); // Log full error in console
          
          // Improved error message handling
          const errorMessage = error?.error || "Invalid email or password. Please try again.";
          alert(errorMessage);
        }
      });
    } else {
      alert("Invalid Credentials. Please enter valid details.");
    }
  }
}
