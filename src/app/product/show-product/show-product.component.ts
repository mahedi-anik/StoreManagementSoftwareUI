import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {faPenToSquare,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { DatePipe } from '@angular/common';
import { ShelfComponent } from 'src/app/shelf/shelf.component';
import { ProductCategoryComponent } from 'src/app/product-category/product-category.component';
import { SupplierComponent } from 'src/app/supplier/supplier.component';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  constructor(private service:SharedService,private datePipe: DatePipe) { }
  faPenToSquare=faPenToSquare;
  faTrashCan=faTrashCan;
  ProductList:any=[];
  ProductdataSource;
  ModelTitle!:string;
  product:any;
  ActivateAddEditProductComp:Boolean=false;
  displayedColumns:string[]=['Id','ProductName','ProductCategoryId','ShelfId','SupplierId','BuyingPrice','SellingPrice','Actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  listShelves:Shelf[] = [];
  listProductCategories:ProductCategory[] = [];
  listSuppliers:Supplier[] = [];




  ngOnInit(): void{
    this.refreshProductList();
    this.getAllShelves();
    this.getProductCategories();
    this.getAllSuppliers();
  }

  refreshProductList()
  {
    this.service.getAllProductList().subscribe(data=>{
      this.ProductList=data;
      this.ProductdataSource=new MatTableDataSource(this.ProductList);
      this.ProductdataSource.paginator=this.paginator;
      this.ProductdataSource.sort=this.sort;
    })
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

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.ProductdataSource.filter = filterValue.trim().toLowerCase();

    if (this.ProductdataSource.paginator) {
      this.ProductdataSource.paginator.firstPage();
    }
  }

  addProductClick()
  {
    this.product ={
      Id:0,
      ProductCategoryId:this.listProductCategories[0].Id,
      ShelfId:this.listShelves[0].Id,
      ProductName:"",
      BatchNo:"",
      SupplierId:this.listSuppliers[0].Id,
      BuyingPrice:"",
      SellingPrice:"",
      ProductDescription:"",
      EntryDate:this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
      EntryBy:""
    }
    this.ModelTitle="Add New Product";
    this.ActivateAddEditProductComp=true;
  }

  closeClick()
  {
    this.ActivateAddEditProductComp=false;
    this.refreshProductList();
  }

  editProduct(item:any){
    this.product=item;
    this.ModelTitle="Edit Shelf Info!";
    this.ActivateAddEditProductComp=true;
  }


  deleteProduct(id:any)
  {
    if (confirm('Are you sure??')==true) {
      
      this.service.deleteShelf(id).subscribe((data:any)=>{
        this.refreshProductList();
      });
    }
  }











}
