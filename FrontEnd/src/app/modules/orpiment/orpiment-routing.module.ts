import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { OrpimentComponent } from '@app/modules/orpiment/orpiment/orpiment.component';

const routes: Routes = [
  { path: "", component: OrpimentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrpimentRoutingModule { }
