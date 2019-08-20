import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { CookiesRoutingModule } from '@app/modules/cookies/cookies-routing.module';
import { CookiesComponent } from '@app/modules/cookies/cookies/cookies.component';

@NgModule({
  declarations: [CookiesComponent],
  imports: [
    CommonModule,
    CookiesRoutingModule
  ]
})
export class CookiesModule { }
