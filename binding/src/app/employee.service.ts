import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: "root"
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json"

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
                    .pipe( catchError(this.handleError) );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

}
