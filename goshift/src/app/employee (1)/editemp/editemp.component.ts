import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpregisterService } from 'src/app/empregister.service';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
  public empData: any = {};
  submitted = false;

  public rid: any = this.aroute.snapshot.params['rid'];
  public selectedId: any;

  onSubmit() {
    this.submitted = true;
    alert('Shift datas are validated successfully!');
  }
  constructor(private service: EmpregisterService, public router: Router, private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('from ng oninit' + this.rid);
    this.service.getRegistration(this.rid).subscribe((data) => (this.empData = data));
  }

  updateEmp() {
    console.log(' Goshift Data ----->' + this.empData);
    this.service.updateRegistration(this.empData).subscribe((data: {}) => this.router.navigate(['/viewemp']));
  }
}
