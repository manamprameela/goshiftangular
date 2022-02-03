import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmploginsService } from '../emplogins.service';

@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.component.html',
  styleUrls: ['./elogin.component.css']
})
export class EloginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private service: EmploginsService) { }
  @Input()
  loginsForm: any = {
    email: '',
    password: '',
  };

  ngOnInit(): void {

  }
  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const user = this.authService.authUser1(loginForm.value);
    console.log(user);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Login Successfully');
      alert("Welcome back :)\nClick ok to proceed!");
      // this.router.navigate(['view'])

    }
    else {
      console.log('Login not Successfully');
      alert("User not found :(\nTry again!");
      loginForm.reset();
    }
  }

  addEmp() {
    console.log('From emp.comp.ts ' + this.loginsForm);
    this.service.createLogins(this.loginsForm).subscribe((data: {}) => this.router.navigate(['/empdash']));
  }
}

