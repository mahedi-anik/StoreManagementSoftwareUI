import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShelfComponent } from '../shelf.component';
import { ShowShelfComponent } from '../show-shelf/show-shelf.component';
import { AddEditShelfComponent } from '../add-edit-shelf/add-edit-shelf.component';


const appRoutes: Routes = [
  { path: '', component: ShelfComponent,
  children:[
    { path: 'shelf', component: ShelfComponent },
    { path: 'showShelf', component: ShowShelfComponent },
    { path: 'addEditShelf',component:AddEditShelfComponent},
    { path:'',redirectTo:'/shelf', pathMatch:'full'}
  ]
 }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})
export class ShelfRoutingModule { }
