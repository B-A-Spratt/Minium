import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { ShopComponent } from '@app/modules/shop/shop/shop.component';

const routes: Routes = [
  { path: '', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
