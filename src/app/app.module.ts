import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA   } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenubarComponent } from './nav-menubar/nav-menubar.component';
import { SidebarSkinsComponent } from './sidebar-skins/sidebar-skins.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
// import { ShelfComponent } from './shelf/shelf.component';
// import { ShowShelfComponent } from './shelf/show-shelf/show-shelf.component';
// import { AddEditShelfComponent } from './shelf/add-edit-shelf/add-edit-shelf.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ProductComponent } from './product/product.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { AddEditProductComponent } from './product/add-edit-product/add-edit-product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ShowProductCategoryComponent } from './product-category/show-product-category/show-product-category.component';
import { AddEditProductCategoryComponent } from './product-category/add-edit-product-category/add-edit-product-category.component';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { AddEditCustomerComponent } from './customer/add-edit-customer/add-edit-customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ShowSupplierComponent } from './supplier/show-supplier/show-supplier.component';
import { AddEditSupplierComponent } from './supplier/add-edit-supplier/add-edit-supplier.component';
import { DatePipe } from '@angular/common';
import { SharedService } from './shared.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavMenubarComponent,
    SidebarSkinsComponent,
    ToolbarComponent,
    // ShelfComponent,
    // ShowShelfComponent,
    // AddEditShelfComponent,
    ProductComponent,
    ShowProductComponent,
    AddEditProductComponent,
    ProductCategoryComponent,
    ShowProductCategoryComponent,
    AddEditProductCategoryComponent,
    CustomerComponent,
    ShowCustomerComponent,
    AddEditCustomerComponent,
    SupplierComponent,
    ShowSupplierComponent,
    AddEditSupplierComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FontAwesomeModule

  ],
  providers: [SharedService,DatePipe],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA 
  ],
})
export class AppModule { }
