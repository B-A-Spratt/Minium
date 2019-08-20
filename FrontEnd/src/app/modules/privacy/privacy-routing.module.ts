import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { PrivacyComponent } from '@app/modules/privacy/privacy/privacy.component';

const routes: Routes = [
  { path: '', component: PrivacyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyRoutingModule { }
