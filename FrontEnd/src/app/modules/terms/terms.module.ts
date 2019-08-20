import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { TermsRoutingModule } from '@app/modules/terms/terms-routing.module';
import { TermsComponent } from '@app/modules/terms/terms/terms.component';

@NgModule({
  declarations: [TermsComponent],
  imports: [
    CommonModule,
    TermsRoutingModule
  ]
})
export class TermsModule { }
