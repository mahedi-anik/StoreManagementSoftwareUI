import { Component, OnInit, Input,DoCheck  } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ShelfComponent } from 'src/app/shelf/shelf.component';
import { ProductCategoryComponent } from 'src/app/product-category/product-category.component';
import { SupplierComponent } from 'src/app/supplier/supplier.component';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit, DoCheck  {

@Input() product:any;
ProductId!:number;
ProductCategoryId:any;
ShelfId!:any;
ProductName!:any;
BatchNo!:any;
SupplierId!:any;
BuyingPrice!:string;
SellingPrice!:string;
ProductDescription!:string;
EntryDate!:string;
EntryBy!:string;
ShelfList!:any;
ProductCategoryList!:any;
SupplierList!:any;
constructor(private service:SharedService,private datePipe: DatePipe) { }

ngOnInit(): void {
  this.getAllShelves();
    this.getProductCategories();
    this.getAllSuppliers()
}

ngDoCheck(): void {
  this.ProductCategoryId=this.product.ProductCategoryId;
  this.ShelfId=this.product.ShelfId;
  this.SupplierId=this.product.SupplierId;
}

getAllShelves()
  {
    this.service.getAllShelfList().subscribe((data:any)=>{
      this.ShelfList = data;
    });
  }
  getProductCategories()
  {
    this.service.getAllProductCategoryList().subscribe((data:any)=>{
      this.ProductCategoryList = data;
    });
  }
  getAllSuppliers()
  {
    this.service.getAllSupplierList().subscribe((data:any)=>{
      this.SupplierList = data;
    });
  }

  selectChangeHandlerProdCat(event:any)
  {
    this.product.ProductCategoryId=event.target.value;
  }
  selectChangeHandlerShelf(event:any)
  {
    this.product.ShelfId=event.target.value;
  }



addProduct(){
  var val ={
    ProductId:this.ProductId,
    ProductCategoryId:this.ProductCategoryId,
    ShelfId:this.ShelfId,
    ProductName:this.ProductName,
    BatchNo:this.BatchNo,
    SupplierId:this.SupplierId,
    BuyingPrice:this.BuyingPrice,
    SellingPrice:this.SellingPrice,
    ProductDescription:this.ShelfId,
    EntryBy:this.EntryBy,
  };
  this.service.addNewProduct(val).subscribe((data:any)=>{
    window.location.reload();
  });
}

updateProduct(){
  var val = {
    ProductCategoryId:this.ProductCategoryId,
    ShelfId:this.ShelfId,
    ProductName:this.ProductName,
    BatchNo:this.BatchNo,
    SupplierId:this.SupplierId,
    BuyingPrice:this.BuyingPrice,
    SellingPrice:this.SellingPrice,
    ProductDescription:this.ShelfId,
    EntryBy:this.EntryBy,
  };
  this.service.updateProduct(this.ProductId,val).subscribe((data:any)=>{
    window.location.reload();
  });
}





}
