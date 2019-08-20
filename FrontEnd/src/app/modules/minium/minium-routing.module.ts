import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { MiniumComponent } from '@app/modules/minium/minium/minium.component';

const routes: Routes = [
  { path: "", component: MiniumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiniumRoutingModule { }
