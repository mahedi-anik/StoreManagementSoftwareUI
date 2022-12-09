import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
  {path:'shelf', loadChildren: () => import('./shelf/shelf.module').then((m)=>m.ShelfModule)},
  {path:'productCategory', loadChildren: () => import('./product-category/product-category.module').then((m)=>m.ProductCategoryModule)},
  {path:'product', loadChildren: () => import('./product/product.module').then((m)=>m.ProductModule)},
  {path:'supplier', loadChildren: () => import('./supplier/supplier.module').then((m)=>m.SupplierModule)},
  {path:'customer', loadChildren: () => import('./customer/customer.module').then((m)=>m.CustomerModule)},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
