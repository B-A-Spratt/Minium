import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { ContactUsRoutingModule } from '@app/modules/contact-us/contact-us-routing.module';
import { ContactUsComponent } from '@app/modules/contact-us/contact-us/contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
