import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { SupportRoutingModule } from '@app/modules/support/support-routing.module';
import { SupportComponent } from '@app/modules/support/support/support.component';

@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
