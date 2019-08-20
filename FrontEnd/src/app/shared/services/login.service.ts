import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from "rxjs/operators"

// custom
import { Login } from '@app/shared/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly rootUrl = "https://localhost:44346/api/logins";

  formData: Login;
  public errorMessage: string = "";
  public token: string = "";
  public expiration: Date;

  constructor(private http: HttpClient) { }

  public get loginRequired(): boolean {
    return this.token.length == 0 || this.expiration > new Date();
  }

  postLogin() {
    return this.http.post(this.rootUrl, this.formData)
      .pipe(
        map((response: any) => {
          let tokenInfo = response;
          this.token = tokenInfo.token;
          this.expiration = tokenInfo.expiration;
          return true;
        })
      );
  }
}
