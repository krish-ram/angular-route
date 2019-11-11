import { Routes } from "@angular/router";
import { SellerComponent } from "./seller.component";

export const seller_routes: Routes = [
  //   {
  //     path: "ppc",
  //     component: SellerComponent
  //   },
  {
    path: "",
    loadChildren: () => import("./ppc/ppc.module").then(m => m.PpcModule)
  }
];
