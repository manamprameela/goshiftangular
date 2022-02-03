import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpshiftService } from '../empshift.service';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnSubmit() {
    if (window.confirm('Are you sure to logout?')) {
      this.router.navigate(['/home']);
    }
  }
}
