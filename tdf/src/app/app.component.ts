import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public topics = ['Angular', 'React', 'Vue'];
  
  submitted = false;

  topicHasError = true;

  errorMsg = '';

  userModel = new User('', 'rob@test.com', 9666076170, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value) {
    if (value === "default") {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(userForm) {
    console.log(userForm);
    this.submitted = true;
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMsg = error.statusText
      );
  }

}
