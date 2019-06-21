import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments = [
    { 'id': 1, 'name': 'Angular'},
    { 'id': 2, 'name': 'Node'},
    { 'id': 3, 'name': 'MongoDB'},
    { 'id': 4, 'name': 'javaScript'},
    { 'id': 5, 'name': 'bootstrap'}
  ];

  onSelect(department){
    this.router.navigate(['/departments',department.id]);
  }

  constructor(private router : Router) { }

  ngOnInit() {
  }

}
