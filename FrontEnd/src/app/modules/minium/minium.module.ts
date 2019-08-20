import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { MiniumRoutingModule } from '@app/modules/minium/minium-routing.module';
import { MiniumComponent } from '@app/modules/minium/minium/minium.component';

@NgModule({
  declarations: [MiniumComponent],
  imports: [
    CommonModule,
    MiniumRoutingModule
  ]
})
export class MiniumModule { }
