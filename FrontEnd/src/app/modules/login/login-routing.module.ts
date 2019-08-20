import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { LoginComponent } from '@app/modules/login/login/login.component';

const routes: Routes = [
  { path: "", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
