import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {faPenToSquare,faTrashCan} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-show-shelf',
  templateUrl: './show-shelf.component.html',
  styleUrls: ['./show-shelf.component.scss']
})
export class ShowShelfComponent implements OnInit {

  constructor(private service:SharedService) { }
  faPenToSquare=faPenToSquare;
  faTrashCan=faTrashCan;
  ShelfList:any=[];
  shelfdataSource;
  ModelTitle!:string;
  shelf:any;
  ActivateAddEditShelfComp:Boolean = false;
  displayedColumns: string[] = ['ShelfId', 'ShelfName', 'NumericNo','ShelfDescription','Actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.refreshShelfList();
  }
  refreshShelfList(){
    this.service.getAllShelfList().subscribe(data=>{
      this.ShelfList=data;
      this.shelfdataSource=new MatTableDataSource(this.ShelfList);
      this.shelfdataSource.paginator=this.paginator;
      this.shelfdataSource.sort=this.sort;
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.shelfdataSource.filter = filterValue.trim().toLowerCase();

    if (this.shelfdataSource.paginator) {
      this.shelfdataSource.paginator.firstPage();
    }
  }

  addShelfClick()
  {
    this.shelf ={
      ShelfId:0,
      ShelfName:"",
      NumericNo:"",
      ShelfDescription:""
    }
    this.ModelTitle="Add New Shelf";
    this.ActivateAddEditShelfComp=true;
  }

  closeClick()
  {
    this.ActivateAddEditShelfComp=false;
    this.refreshShelfList();
  }

  editShelf(item:any){
    this.shelf=item;
    this.ModelTitle="Edit Shelf Info!";
    this.ActivateAddEditShelfComp=true;
  }


  deleteShelf(id:any)
  {
    if (confirm('Are you sure??')==true) {
      
      this.service.deleteShelf(id).subscribe((data:any)=>{
        this.refreshShelfList();
      });
    }
  }









}