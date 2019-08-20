import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { ContactUsComponent } from '@app/modules/contact-us/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
