import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpshiftService } from '../empshift.service';
import { Goshift } from '../Goshift';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor(private service: EmpshiftService, private router: Router) { }
  
  ngOnInit(): void {
  }

  ngOnSubmit() {
    if (window.confirm('Are you sure to logout?')) {
      this.router.navigate(['/home']);
    }
  }
}
