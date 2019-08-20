import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

// custom
import { LoginService } from '@app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }

    this.loginService.formData = {
      Id: 0,
      Email: '',
      Password: '',
      RememberMe: false
    }
  }

  onLogin(form: NgForm) {
    this.loginService.postLogin().subscribe(
      s => {
        this.resetForm(form);
        this.toastrService.success('Login success!', 'Login Attempt')
        this.router.navigate([""]);
      }, e => {
        if (this.loginService.errorMessage === "email") {
          this.toastrService.error('Incorrect email.', 'Login Attempt');
        } else if (this.loginService.errorMessage == "password") {
          this.toastrService.error('Incorrect password.', 'Login Attempt');
        } else {
          this.toastrService.error('Somthing went wrong... Please try again later.', 'Login Attempt');
        }
      }
    )
  }
}
