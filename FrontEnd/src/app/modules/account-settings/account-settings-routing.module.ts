import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { AccountSettingsComponent } from '@app/modules/account-settings/account-settings/account-settings.component';

const routes: Routes = [
  { path: "", component: AccountSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingsRoutingModule { }
