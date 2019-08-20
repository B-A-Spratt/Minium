import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { TermsComponent } from '@app/modules/terms/terms/terms.component';

const routes: Routes = [
  { path: '', component: TermsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
