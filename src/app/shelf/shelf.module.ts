import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfRoutingModule } from './shelf-routing/shelf-routing.module';
import { ShelfComponent } from './shelf.component';
import { AddEditShelfComponent } from './add-edit-shelf/add-edit-shelf.component';
import { ShowShelfComponent } from './show-shelf/show-shelf.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddEditShelfComponent,
    ShowShelfComponent,
    ShelfComponent
  ],
  imports: [
    CommonModule,
    ShelfRoutingModule,FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ]
})
export class ShelfModule { }
