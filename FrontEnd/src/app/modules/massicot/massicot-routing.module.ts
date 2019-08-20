import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { MassicotComponent } from '@app/modules/massicot/massicot/massicot.component';

const routes: Routes = [
  { path: "", component: MassicotComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MassicotRoutingModule { }
