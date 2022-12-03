import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
// import { MatDialogRef } from '@angular/material';
import { ProductCategoryComponent } from '../product-category.component';


@Component({
  selector: 'app-add-edit-product-category',
  templateUrl: './add-edit-product-category.component.html',
  styleUrls: ['./add-edit-product-category.component.scss']
})
export class AddEditProductCategoryComponent implements OnInit {
constructor(private service: SharedService){}
  
  @Input() 
  productCategory:any;
  ProductCategoryId:string;
  ProductCategoryName:string;
  ProductCategoryDescription:string;
  EntryBy:string;
  ProductCategoryList:any=[];
  index:number = 0;
  ModelTitle!:string;



  ngOnInit(): void {
    this.LoadProductCategoryList();
  }
  LoadProductCategoryList(){
    this.service.getAllProductCategoryList().subscribe((data:any)=>{
      this.ProductCategoryId=this.productCategory.ProductCategoryId;
      this.ProductCategoryName=this.productCategory.ProductCategoryName;
      this.ProductCategoryDescription=this.productCategory.ProductCategoryDescription;
      this.EntryBy=this.productCategory.EntryBy;
    });
  }

  onClose() {
    // this.service.form.reset();
    //this.dialogRef.close();
    window.location.reload();
  }









}
