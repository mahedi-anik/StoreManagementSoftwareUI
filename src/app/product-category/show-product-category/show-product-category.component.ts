import { Component,OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { AddEditCustomerComponent } from 'src/app/customer/add-edit-customer/add-edit-customer.component';
import { AddEditProductCategoryComponent } from '../add-edit-product-category/add-edit-product-category.component';
@Component({
  selector: 'app-show-product-category',
  templateUrl: './show-product-category.component.html',
  styleUrls: ['./show-product-category.component.scss']
})

export class ShowProductCategoryComponent implements OnInit {


  constructor(private dialog: MatDialog){}
  
  ProductCategoryList:any=[];

  ngOnInit(): void {
    
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddEditProductCategoryComponent, dialogConfig);
}


















}
