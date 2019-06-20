import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      { "id": 1, "name": "pk", "age": 22 },
      { "id": 2, "name": "pk", "age": 22 },
      { "id": 3, "name": "pk", "age": 22 },
      { "id": 4, "name": "pk", "age": 22 },
    ];
  }
}
