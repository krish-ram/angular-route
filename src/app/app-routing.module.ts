import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "seller",
    loadChildren: () =>
      import("./seller/seller.module").then(m => m.SellerModule)
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
