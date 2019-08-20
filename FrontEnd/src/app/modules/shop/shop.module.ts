import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shop
import { ShopRoutingModule } from '@app/modules/shop/shop-routing.module';
import { ShopComponent } from '@app/modules/shop/shop/shop.component';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
