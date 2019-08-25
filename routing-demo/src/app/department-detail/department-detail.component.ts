import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You have selected the department with the id = {{departmentId}} </h3>

    <p>
      <button (click)="showOverview()">overview</button> &nbsp;
      <button (click)="showContact()">contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">Previous</button>&nbsp;
      <button (click)="goNext()">Next</button>
    </p>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = this.route.snapshot.paramMap.get("id");
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments', {'id': selectedId, "test": "testValue"}]);
    this.router.navigate(['../', {'id': selectedId, "test": "testValue"}], {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
