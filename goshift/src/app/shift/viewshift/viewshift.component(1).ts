import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpshiftService } from 'src/app/empshift.service';
import { Goshift } from 'src/app/Goshift';

@Component({
  selector: 'app-viewshift',
  templateUrl: './viewshift.component.html',
  styleUrls: ['./viewshift.component.css']
})
export class ViewshiftComponent implements OnInit {
  public shifts = [] as any;
  constructor(private service: EmpshiftService, private router: Router) {}
  public selectedId: number = 0;
  ngOnInit(): void {
    this.service.getShiftFromService().subscribe((data) => (this.shifts = data));
  }

  onDelete(sft: Goshift) {
    this.selectedId = sft.sid;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.service.deleteGoshift(this.selectedId).subscribe((data: {}) => this.router.navigate(['/viewshift']));
    }
  }

  ngOnSubmit() {
    if (window.confirm('Are you sure to logout?')) {
      this.router.navigate(['/home']);
    }

  }
}
