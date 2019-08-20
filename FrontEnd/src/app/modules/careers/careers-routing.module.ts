import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { CareersComponent } from '@app/modules/careers/careers/careers.component';

const routes: Routes = [
  { path: '', component: CareersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
