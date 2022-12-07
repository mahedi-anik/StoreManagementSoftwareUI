import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfComponent } from './shelf.component';
import { ShowShelfComponent } from './show-shelf/show-shelf.component';
import { AddEditShelfComponent } from './add-edit-shelf/add-edit-shelf.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ShelfComponent,
    children: [
      { path: 'shelf', component: ShelfComponent },
      { path: 'showShelf', component: ShowShelfComponent },
      { path: 'addEditShelf', component: AddEditShelfComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelfRoutingModule { }
