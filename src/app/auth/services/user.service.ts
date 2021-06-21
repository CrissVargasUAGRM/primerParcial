import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from "../../../environments/environment.prod";
import * as devEnv from "../../../environments/environment";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseURL;
  private urldev = devEnv.environment.basuURLdev;

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: User){
    return this.http.post(`${this.urldev}/api/singup`, user);
  }

  loginUser(username: string, password:string){
    const credentials = {
      username,
      password
    };
    return this.http.post(`${this.urldev}/api/singin`, credentials);
  }
}
