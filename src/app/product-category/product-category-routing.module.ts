import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductCategoryComponent } from './add-edit-product-category/add-edit-product-category.component';
import { ProductCategoryComponent } from './product-category.component';
import { ShowProductCategoryComponent } from './show-product-category/show-product-category.component';

const routes: Routes = [
  {
    path: '', component: ProductCategoryComponent,
    children: [
      { path: 'productCategory', component: ProductCategoryComponent },
      { path: 'showProductCategory', component: ShowProductCategoryComponent },
      { path: 'addEditProductCategory', component: AddEditProductCategoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoryRoutingModule { }
