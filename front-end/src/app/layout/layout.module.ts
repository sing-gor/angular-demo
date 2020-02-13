import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NavbarComponent, LayoutComponent],
  imports: [ShareModule, RouterModule]
})
export class LayoutModule {}
