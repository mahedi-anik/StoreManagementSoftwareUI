import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductComponent } from './product/product.component';
// import { ShelfComponent } from './shelf/shelf.component';
// import { CustomerComponent } from './customer/customer.component';
// import { SupplierComponent } from './supplier/supplier.component';
// import { ProductCategoryComponent } from './product-category/product-category.component';

const routes: Routes = [

  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
  {path:'shelf',
  loadChildren: () => import('../app/shelf/shelf.module').then(x => x.ShelfModule)}
  
  // {path:'shelf',component:ShelfComponent},
  // {path:'customer',component:CustomerComponent},
  // {path:'product',component:ProductComponent},
  // {path:'productCategory',component:ProductCategoryComponent},
  // {path:'supplier',component:SupplierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
