import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { HomeComponent } from '@app/modules/home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
