import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpregisterService } from 'src/app/empregister.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: EmpregisterService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      ename: ['', Validators.required],
      doj: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      location: ['', Validators.required],
    })
  }

  ngSubmit() {
    console.log(this.addForm.value);
    alert("Registered Successfully");
  }

  ngOnSubmit() {
    if (window.confirm('Are you sure to logout?')) {
      this.router.navigate(['/home']);
    }

  }

  addShift() {
    console.log('From emp.comp.ts ' + this.addForm);
    this.service.createRegistration(this.addForm.getRawValue()).subscribe((data: {}) => this.router.navigate(['/viewemp']));
  }
}
