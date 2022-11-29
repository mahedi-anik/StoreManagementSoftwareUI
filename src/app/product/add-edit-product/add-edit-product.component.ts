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











addShelf(){
  var val ={Id:this.Id,
    ShelfName:this.ShelfName,
    NumericNo:this.NumericNo,
    ShelfDescription:this.ShelfDescription
  };
  this.service.addNewShelf(val).subscribe((data:any)=>{
    window.location.reload();
  });
}

updateShelf(){
  var val = {
    Id:this.Id,
    ShelfName:this.ShelfName,
    NumericNo:this.NumericNo,
    ShelfDescription:this.ShelfDescription
  };
  this.service.updateShelf(this.Id,val).subscribe((data:any)=>{
    window.location.reload();
  });
}





}
