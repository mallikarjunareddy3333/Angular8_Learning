import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `<h2>
              Inline Template
            </h2>`,
  styles: [`
    div {
      color: red
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
