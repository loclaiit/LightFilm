import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { environment } from '../environments/environment';
import { Observable, Subject } from 'rxjs';
@Injectable()
export class SessionService {
  menuFlag: boolean = false;
  refresh:Subject<Object>;
  refreshObs;
  constructor() {
    this.refresh = new Subject();
    this.refreshObs =  this.refresh.asObservable();
  }
}
