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
Id!:number;
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
listShelves!:any;
listProductCategories!:any;
listSuppliers!:any;
constructor(private service:SharedService,private datePipe: DatePipe) { }

ngOnInit(): void {
  this.getAllShelves();
    this.getProductCategories();
    this.getAllSuppliers()
}

ngDoCheck(): void {
  this.Id=this.product.ProductCategoryId;
  this.Id=this.product.ShelfId;
  this.Id=this.product.SupplierId;
}

getAllShelves()
  {
    this.service.getAllShelfList().subscribe((data:any)=>{
      this.listShelves = data;
    });
  }
  getProductCategories()
  {
    this.service.getAllProductCategoryList().subscribe((data:any)=>{
      this.listProductCategories = data;
    });
  }
  getAllSuppliers()
  {
    this.service.getAllSupplierList().subscribe((data:any)=>{
      this.listSuppliers = data;
    });
  }

  selectChangeHandlerProdCat(event:any)
  {
    this.product.ProductCategoryId=event.target.value;
  }

addProduct(){
  var val ={Id:this.Id,
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
  this.service.updateProduct(this.Id,val).subscribe((data:any)=>{
    window.location.reload();
  });
}





}
