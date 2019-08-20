import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { CreateAccountComponent } from '@app/modules/create-account/create-account/create-account.component';

const routes: Routes = [
  { path: "", component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAccountRoutingModule { }
