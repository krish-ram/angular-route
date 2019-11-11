import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PpcComponent } from "./ppc.component";
import { RouterModule } from "@angular/router";
import { ppc_routes } from "./ppc.route";

@NgModule({
  declarations: [PpcComponent],
  imports: [CommonModule, RouterModule.forChild(ppc_routes)]
})
export class PpcModule {}
