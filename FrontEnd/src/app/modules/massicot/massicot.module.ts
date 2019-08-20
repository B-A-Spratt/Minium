import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { MassicotRoutingModule } from '@app/modules/massicot/massicot-routing.module';
import { MassicotComponent } from '@app/modules/massicot/massicot/massicot.component';

@NgModule({
  declarations: [MassicotComponent],
  imports: [
    CommonModule,
    MassicotRoutingModule
  ]
})
export class MassicotModule { }
