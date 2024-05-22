import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public userForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  public isInvalid: boolean = false;
  public btnSpinner: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) { }

  public onLogin() {
    const defaultUsername = 'user';
    const defaultPassword = 'pass';

    let userInput = this.userForm.value;

    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }

    if (userInput.username === defaultUsername && userInput.password === defaultPassword) {
      this.isInvalid = false;
      this.btnSpinner = true;
      setTimeout(() => { 
        this.btnSpinner = false;
        this.router.navigate(['home']);
      }, 3000);
    } else [
      this.isInvalid = true
    ]
  }
}
