import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpregisterService } from 'src/app/empregister.service';
import { Registration } from 'src/app/Registration';

@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {
  public regemp = [] as any;
  constructor(private service: EmpregisterService, private router: Router) {}
  public selectedId: number = 0;
  ngOnInit(): void {
    this.service.getRegisterFromService().subscribe((data) => (this.regemp = data));
  }

  onDelete(reg: Registration) {
    this.selectedId = reg.rid;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.service.deleteRegistration(this.selectedId).subscribe((data: {}) => this.router.navigate(['/viewemp']));
    }
  }

  ngOnSubmit() {
    if (window.confirm('Are you sure to logout?')) {
      this.router.navigate(['/home']);
    }

  }
}
