import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  AddEmp: boolean = false;
  ViewEmp: boolean = false;
  EditEmp: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnSubmit() {
    if (window.confirm('Are you sure to logout?')) {
      this.router.navigate(['/home']);
    }

  }

}
