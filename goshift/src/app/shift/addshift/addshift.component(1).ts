import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpshiftService } from 'src/app/empshift.service';

@Component({
  selector: 'app-addshift',
  templateUrl: './addshift.component.html',
  styleUrls: ['./addshift.component.css']
})
export class AddshiftComponent implements OnInit {
  addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: EmpshiftService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      ename: ['', Validators.required],
      dname: ['', Validators.required],
      sname: ['', Validators.required],
      sdate: ['', Validators.required],
      stime: ['', Validators.required],
    })
  }

  ngSubmit() {
    console.log(this.addForm.value);
    alert("Registered Successfully");
  }

  addShift() {
    console.log('From emp.comp.ts ' + this.addForm);
    this.service.createGoshift(this.addForm.getRawValue()).subscribe((data: {}) => this.router.navigate(['/viewshift']));
  }

  ngOnSubmit() {
    if (window.confirm('Are you sure to logout?')) {
      this.router.navigate(['/home']);
    }
  }
}
