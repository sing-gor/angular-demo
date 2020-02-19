import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [ShareModule, RouterModule]
})
export class LayoutModule {}
