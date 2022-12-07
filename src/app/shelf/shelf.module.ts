import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfRoutingModule } from './shelf-routing.module';
import { ShelfComponent } from './shelf.component';
import { AddEditShelfComponent } from './add-edit-shelf/add-edit-shelf.component';
import { ShowShelfComponent } from './show-shelf/show-shelf.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavMenubarComponent } from '../nav-menubar/nav-menubar.component'; 



@NgModule({
  declarations: [
    ShowShelfComponent,
    AddEditShelfComponent,
    ShelfComponent,
    NavMenubarComponent
  ],
  imports: [
    CommonModule,
    ShelfRoutingModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FontAwesomeModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,
    MatInputModule

  ],
  schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ]
})
export class ShelfModule { }
