import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { OcherComponent } from '@app/modules/ocher/ocher/ocher.component';

const routes: Routes = [
  { path: "", component: OcherComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcherRoutingModule { }
