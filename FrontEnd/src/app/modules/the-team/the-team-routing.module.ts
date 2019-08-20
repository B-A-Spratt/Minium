import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { TheTeamComponent } from '@app/modules/the-team/the-team/the-team.component';

const routes: Routes = [
  { path: '', component: TheTeamComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheTeamRoutingModule { }
