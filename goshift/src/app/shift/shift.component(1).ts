import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {
  AddShift: boolean = false;
  ViewShift: boolean = false;
  EditShift: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnSubmit() {
    if (window.confirm('Are you sure to logout?')) {
      this.router.navigate(['/home']);
    }
  }
}
