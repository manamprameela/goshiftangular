import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpshiftService } from '../empshift.service';

@Component({
  selector: 'app-updateshift',
  templateUrl: './updateshift.component.html',
  styleUrls: ['./updateshift.component.css']
})
export class UpdateshiftComponent implements OnInit {
  public shiftData: any = {};
  submitted = false;

  public sid: any = this.aroute.snapshot.params['sid'];
  public selectedId: any;

  onSubmit() {
    this.submitted = true;
    alert('Shift datas are validated successfully!');
  }
  constructor(private service: EmpshiftService, public router: Router, private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('from ng oninit' + this.sid);
    this.service.getGoshift(this.sid).subscribe((data) => (this.shiftData = data));
  }

  updateShift() {
    console.log(' Goshift Data ----->' + this.shiftData);
    this.service.updateGoshift(this.shiftData).subscribe((data: {}) => this.router.navigate(['/dash']));
  }
}
