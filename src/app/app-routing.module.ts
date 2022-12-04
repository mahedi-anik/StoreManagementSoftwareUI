import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ShelfComponent } from './shelf/shelf.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'shelf',component:ShelfComponent},
  {path:'customer',component:CustomerComponent},
  {path:'product',component:ProductComponent},
  {path:'productCategory',component:ProductCategoryComponent},
  {path:'supplier',component:SupplierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
