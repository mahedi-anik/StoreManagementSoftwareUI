import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
  {
    path:'shelf',
    loadChildren: () => 
    import('./shelf/shelf.module').then((m)=>m.ShelfModule),
  },
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
