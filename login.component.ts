import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, ]),
  });
  isLoginSuccess = false;
  constructor(private router: Router) {}
  onLogin() {
    const formData = this.loginForm.value;

    if (formData.email == 'demo' && formData.password == 'demo') {
      // this.isLoginSuccess = true;
      this.router.navigateByUrl('/product');
      localStorage.setItem('userName', formData.email);
      localStorage.setItem('password',formData.password);
      console.log(this.loginForm.value);
    } else {
      alert('invalid login form');
    }
  }
}

