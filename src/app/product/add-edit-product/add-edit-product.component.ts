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
  constructor(private service:SharedService,private datePipe: DatePipe) { }
@Input() product:any;
ProductId:string;
ProductCategoryId:string;
ShelfId:string;
ProductName:string;
BatchNo:string;
SupplierId:string;
BuyingPrice:string;
SellingPrice:string;
ProductDescription:string;
EntryDate:string;
EntryBy!:string;
ShelfList:any;
ProductCategoryList:any;
SupplierList:any;
ProductList:any=[];
index:number = 0;

ngOnInit(): void {
  this.getAllShelves();
    this.getProductCategories();
    this.getAllSuppliers()
    this.LoadProductList();
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
  LoadProductList(){
    this.service.getAllProductList().subscribe((data:any)=>{
      this.ProductList=data;

      this.ProductId=this.product.ProductId,
      this.ProductName=this.product.ProductName,
      this.ProductCategoryId=this.product.ProductCategoryId,
      this.ShelfId=this.product.ShelfId;
      this.BatchNo=this.product.BatchNo,
      this.SupplierId=this.product.SupplierId,
      this.BuyingPrice=this.product.BuyingPrice,
      this.SellingPrice=this.product.SellingPrice;
      this.ProductDescription=this.product.ProductDescription;
      this.EntryBy=this.product.EntryBy;
      this.EntryDate=this.product.EntryDate;
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
