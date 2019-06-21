import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-deptdetail',
  templateUrl: './deptdetail.component.html',
  styleUrls: ['./deptdetail.component.css']
})
export class DeptdetailComponent implements OnInit {

  public deptpartmentID;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
// tslint:disable-next-line: radix
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.deptpartmentID = id;
  }

}
