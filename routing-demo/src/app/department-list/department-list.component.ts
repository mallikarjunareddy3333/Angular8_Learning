import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h2>Department List</h2>
    <div>{{errMsg}}</div>
    <ul class="items">
      <li (click) = "onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge"> {{department.id}} </span> {{department.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"MongoDB"},
    {"id":4, "name":"Ruby"},
    {"id":5, "name":"Bootstrap"}
  ];

  public selectedId;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    //this.router.navigate(['/departments',department.id]);
    this.router.navigate([department.id], {relativeTo: this.route})
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
