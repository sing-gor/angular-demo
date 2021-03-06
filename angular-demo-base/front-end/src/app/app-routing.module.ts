import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/components/layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        loadChildren: () =>
          import("./pages/home/home.module").then(m => m.HomeModule)
      }
      // {
      //   path: 'css',
      //   loadChildren: () => import('./feature/css-design/css-design.module').then(m => m.CssDesignModule)
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () => import('./feature/charts/charts.module').then(m => m.ChartsModule)
      // },
    ]
  },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
