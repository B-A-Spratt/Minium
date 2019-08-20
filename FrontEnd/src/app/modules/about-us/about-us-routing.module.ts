import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { AboutUsComponent } from '@app/modules/about-us/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
