import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmploginsService } from '../emplogins.service';

@Component({
  selector: 'app-eulogin',
  templateUrl: './eulogin.component.html',
  styleUrls: ['./eulogin.component.css']
})
export class EuloginComponent implements OnInit {
  empForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router: Router,private service: EmploginsService) { }

  ngOnInit(): void {
    this.empForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  oneLogin(empForm: FormGroup) {
    console.log(empForm.value);
    const user = this.authService.authUser1(empForm.value);
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
      empForm.reset();
    }
  }



  addEmp() {
    console.log('From emp.comp.ts ' + this.empForm);
    this.service.createLogins(this.empForm.getRawValue()).subscribe((data: {}) => this.router.navigate(['/empdash']));
  }

}