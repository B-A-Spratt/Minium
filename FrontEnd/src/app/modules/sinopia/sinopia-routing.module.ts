import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { SinopiaComponent } from '@app/modules/sinopia/sinopia/sinopia.component';

const routes: Routes = [
  { path: "", component: SinopiaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinopiaRoutingModule { }
