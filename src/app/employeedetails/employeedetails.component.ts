import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  public employees = [];

  constructor(private _employeeservice : EmployeeService) { }

  ngOnInit() {

    this.employees = this._employeeservice.getEmployees();

  }

}
