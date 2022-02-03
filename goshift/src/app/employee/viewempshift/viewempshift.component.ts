import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpshiftService } from 'src/app/empshift.service';

@Component({
  selector: 'app-viewempshift',
  templateUrl: './viewempshift.component.html',
  styleUrls: ['./viewempshift.component.css']
})
export class ViewempshiftComponent implements OnInit {
  public shifts = [] as any;
  constructor(private service: EmpshiftService, private router: Router) { }

  ngOnInit(): void {
    this.service.getShiftFromService().subscribe((data) => (this.shifts = data));
  }

  ngOnSubmit() {
    if (window.confirm('Are you sure to logout?')) {
      this.router.navigate(['/home']);
    }

  }
}
