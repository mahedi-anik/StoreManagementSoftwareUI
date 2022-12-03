import { Component,OnInit,ViewChild  } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import {faPenToSquare,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { AddEditProductCategoryComponent } from '../add-edit-product-category/add-edit-product-category.component';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-show-product-category',
  templateUrl: './show-product-category.component.html',
  styleUrls: ['./show-product-category.component.scss']
})

export class ShowProductCategoryComponent implements OnInit {

  constructor(private dialog: MatDialog,private service:SharedService,private datePipe: DatePipe){}
  faPenToSquare=faPenToSquare;
  faTrashCan=faTrashCan;
  ProductCategoryList:any=[];
  ProductCategorydataSource;
  productCategory:any;
  displayedColumns: string[] = ['ProductCategoryId', 'ProductCategoryName', 'ProductCategoryDescription','Actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit(): void {
    this.refreshProductCategoryList();
  }
  refreshProductCategoryList()
  {
    this.service.getAllProductCategoryList().subscribe(data=>{
      this.ProductCategoryList=data;
      this.ProductCategorydataSource=new MatTableDataSource(this.ProductCategoryList);
      this.ProductCategorydataSource.paginator=this.paginator;
      this.ProductCategoryList.sort=this.sort;
    });
  }
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.ProductCategorydataSource.filter = filterValue.trim().toLowerCase();

    if (this.ProductCategorydataSource.paginator) {
      this.ProductCategorydataSource.paginator.firstPage();
    }
  }
  addProductCategory()
  {
    this.productCategory={
      ProductCategoryId:0,
      ProductCategoryName:"",
      ProductCategoryDescription:"",
      EntryBy:"",
      EntryDate:this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    }
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(AddEditProductCategoryComponent,dialogConfig);
  }


// editShelf(item:any){
//   this.shelf=item;
//   this.ModelTitle="Edit Shelf Info!";
//   this.ActivateAddEditShelfComp=true;
// }


deleteProductCategory(id:any)
{
  if (confirm('Are you sure??')==true) {
    
    this.service.deleteProductCategory(id).subscribe((data:any)=>{
      this.refreshProductCategoryList();
    });
  }
}


















}
