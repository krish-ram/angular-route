import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SellerComponent } from "./seller.component";
import { RouterModule } from "@angular/router";
import { seller_routes } from "./seller.route";

@NgModule({
  declarations: [SellerComponent],
  imports: [CommonModule, RouterModule.forChild(seller_routes)]
})
export class SellerModule {}
