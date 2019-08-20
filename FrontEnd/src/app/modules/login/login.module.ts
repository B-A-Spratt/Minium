import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// custom
import { LoginRoutingModule } from '@app/modules/login/login-routing.module';
import { LoginComponent } from '@app/modules/login/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    // custom
    LoginRoutingModule,
  ]
})
export class LoginModule { }
