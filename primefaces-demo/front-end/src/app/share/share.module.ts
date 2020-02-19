import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardModule } from "primeng/card";
import { AccordionModule } from "primeng/accordion";
import { ButtonModule } from "primeng/button";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    AccordionModule,
    ButtonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    AccordionModule,
    ButtonModule
  ]
})
export class ShareModule {}
