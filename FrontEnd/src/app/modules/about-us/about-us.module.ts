import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { AboutUsRoutingModule } from '@app/modules/about-us/about-us-routing.module';
import { AboutUsComponent } from '@app/modules/about-us/about-us/about-us.component';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
