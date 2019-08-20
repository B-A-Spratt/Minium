import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { SinopiaRoutingModule } from '@app/modules/sinopia/sinopia-routing.module';
import { SinopiaComponent } from '@app/modules/sinopia/sinopia/sinopia.component';

@NgModule({
  declarations: [SinopiaComponent],
  imports: [
    CommonModule,
    SinopiaRoutingModule
  ]
})
export class SinopiaModule { }
