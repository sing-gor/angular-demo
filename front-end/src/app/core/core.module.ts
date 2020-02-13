import { NgModule, SkipSelf, Optional } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { ServicesModule } from "../services/services.module";
import { ShareModule } from "../share/share.module";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { NZ_I18N, en_US } from "ng-zorro-antd";
import { LayoutModule } from "../layout/layout.module";
registerLocaleData(en);
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
  exports: [ShareModule, AppRoutingModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule 只能被appModule引入");
    }
  }
}
