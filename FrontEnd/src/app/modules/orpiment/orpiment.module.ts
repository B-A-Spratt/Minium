import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { OrpimentRoutingModule } from '@app/modules/orpiment/orpiment-routing.module';
import { OrpimentComponent } from '@app/modules/orpiment/orpiment/orpiment.component';

@NgModule({
  declarations: [OrpimentComponent],
  imports: [
    CommonModule,
    OrpimentRoutingModule
  ]
})
export class OrpimentModule { }
