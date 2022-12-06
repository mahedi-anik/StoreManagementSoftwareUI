import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfRoutingModule } from './shelf-routing/shelf-routing.module';
import { AddEditShelfComponent } from './add-edit-shelf/add-edit-shelf.component';
import { ShowShelfComponent } from './show-shelf/show-shelf.component';


@NgModule({
  declarations: [
    AddEditShelfComponent,
    ShowShelfComponent
  ],
  imports: [
    CommonModule,
    ShelfRoutingModule
  ]
})
export class ShelfModule { }
