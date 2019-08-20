import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@app/shared/services/login.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  errorMessage: string = "";

  public user = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    rememberMe: ""
  }

  constructor(private router: Router,
    private login: LoginService,
    //private user: UserService
    ) { }

  ngOnInit() { }

}
