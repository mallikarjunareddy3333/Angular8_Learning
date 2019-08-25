import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';

@Component({
  selector: '.app-test',
  template: `
    <h2> {{name}} </h2>
    <h2> {{name | lowercase}} </h2>
    <h2> {{name | uppercase}} </h2>
    <h2> {{message | titlecase}} </h2>
    <h2> {{name | slice:1:7}} </h2>
    <h2> {{person | json}} </h2>

    <h2> {{5.678 | number:'1.2-3'}} </h2>
    <h2> {{5.678 | number:'3.4-5'}} </h2>
    <h2> {{5.678 | number:'3.1-2'}} </h2>

    <h2> {{0.25 | percent}} </h2>
    
    <h2> {{0.25 | currency}} </h2>
    <h2> {{0.25 | currency: 'INR': 'code' }} </h2>

    <h2> {{date}} </h2>
    <h2> {{date | date: 'short'}} </h2>
    <h2> {{date | date: 'shortDate'}} </h2>
    <h2> {{date | date: 'shortTime'}} </h2>
    
  `,
  styles: []  
})
export class TestComponent implements OnInit {
  
  public name = "Angular8";
  public message = "Welcome to angular8";
  public person = {
    "firstName": "Arjun",
    "lastName": "Reddy"
  }

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
