import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent { 

  public btnSpinner: boolean = false;

  constructor(private router: Router) { }

  public logout() {
    this.btnSpinner = true;
    setTimeout(() => { 
      this.btnSpinner = false;
      this.router.navigate(['']);
    }, 3000);
  }
}
