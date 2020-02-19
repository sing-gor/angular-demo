import { NgModule, SkipSelf, Optional } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { ServicesModule } from "../services/services.module";
import { ShareModule } from "../share/share.module";

import { LayoutModule } from "../layout/layout.module";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    LayoutModule,

    ShareModule,
    AppRoutingModule
  ],
  exports: [ShareModule, AppRoutingModule]
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule 只能被appModule引入");
    }
  }
}
