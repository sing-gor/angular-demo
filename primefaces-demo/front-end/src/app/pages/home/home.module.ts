import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ShareModule } from "src/app/share/share.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [ShareModule, HomeRoutingModule]
})
export class HomeModule {}
