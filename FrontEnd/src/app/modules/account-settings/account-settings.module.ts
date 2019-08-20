import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { AccountSettingsRoutingModule } from '@app/modules/account-settings/account-settings-routing.module';
import { AccountSettingsComponent } from '@app/modules/account-settings/account-settings/account-settings.component';

@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [
    CommonModule,
    AccountSettingsRoutingModule
  ]
})
export class AccountSettingsModule { }
