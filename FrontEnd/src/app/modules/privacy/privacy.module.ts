import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { PrivacyRoutingModule } from '@app/modules/privacy//privacy-routing.module';
import { PrivacyComponent } from '@app/modules/privacy//privacy/privacy.component';

@NgModule({
  declarations: [PrivacyComponent],
  imports: [
    CommonModule,
    PrivacyRoutingModule
  ]
})
export class PrivacyModule { }
