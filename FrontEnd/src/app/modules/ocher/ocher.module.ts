import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { OcherRoutingModule } from '@app/modules/ocher/ocher-routing.module';
import { OcherComponent } from '@app/modules/ocher/ocher/ocher.component';

@NgModule({
  declarations: [OcherComponent],
  imports: [
    CommonModule,
    OcherRoutingModule
  ]
})
export class OcherModule { }
