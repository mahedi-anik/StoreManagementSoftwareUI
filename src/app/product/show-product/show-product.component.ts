import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {faPenToSquare,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { DatePipe } from '@angular/common';

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
  displayedColumns:string[]=['ProductId','ProductName','ProductCategoryId','ShelfId','SupplierId','BuyingPrice','SellingPrice','Actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ShelfList:any=[];
  ProductCategoryList:any=[];
  SupplierList:any=[];



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
      ProductId:0,
      ProductCategoryId:this.ProductCategoryList[0].ProductCategoryId,
      ShelfId:this.ShelfList[0].ShelfId,
      ProductName:"",
      BatchNo:"",
      SupplierId:this.SupplierList[0].SupplierId,
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
    this.ModelTitle="Edit Product Info!";
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
