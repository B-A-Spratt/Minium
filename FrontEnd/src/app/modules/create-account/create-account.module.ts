import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// custom
import { CreateAccountRoutingModule } from '@app/modules/create-account/create-account-routing.module';
import { CreateAccountComponent } from '@app/modules/create-account/create-account/create-account.component';

import { LoginService } from '@app/shared/services/login.service';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    // custom
    CreateAccountRoutingModule
  ],
  providers: [
    LoginService,
    // UserService
  ]
})
export class CreateAccountModule { }
