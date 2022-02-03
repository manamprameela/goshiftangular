import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirmed.validator';
import { EmpregisterService } from '../empregister.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: EmpregisterService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      ename: ['', Validators.required],
      doj: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      location: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
    }, { 
      validator: ConfirmedValidator('password', 'repassword')
    })
  }

  ngSubmit() {
    console.log(this.registerForm.value);
    alert("Registered Successfully");
  }

  addEmployee() {
    console.log('From emp.comp.ts ' + this.registerForm);
    this.service.createRegistration(this.registerForm.getRawValue()).subscribe((data: {}) => this.router.navigate(['/elog']));
  }
}
