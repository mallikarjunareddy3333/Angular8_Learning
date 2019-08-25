import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
    <h2>Employee Details</h2>
    <div>{{errMsg}}</div>
    <ul *ngFor="let employee of employees">
      <li> {{employee.id}}. {{employee.name}} - {{employee.age}} </li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = []
  public errMsg;

  constructor(private _employeeService: EmployeeService) {   }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                    error => this.errMsg = error);
  }

}
