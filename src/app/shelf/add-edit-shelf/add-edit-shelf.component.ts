import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-shelf',
  templateUrl: './add-edit-shelf.component.html',
  styleUrls: ['./add-edit-shelf.component.scss']
})
export class AddEditShelfComponent implements OnInit {
 
  constructor(private service: SharedService) { }

  @Input() shelf:any;
  ShelfId:string;
  ShelfName:string;
  NumericNo:string;
  ShelfDescription:string;
  ShelfList:any=[];
  index:number = 0;
  ModelTitle!:string;
  ngOnInit(): void {
    this.LoadShelfList();
  }
  LoadShelfList(){
    this.service.getAllShelfList().subscribe((data:any)=>{
      this.ShelfList=data;

      this.ShelfId=this.shelf.ShelfId,
      this.ShelfName=this.shelf.ShelfName,
      this.NumericNo=this.shelf.NumericNo,
      this.ShelfDescription=this.shelf.ShelfDescription;
    });
  }

  addShelf(){
    var val ={ShelfId:this.ShelfId,
      ShelfName:this.ShelfName,
      NumericNo:this.NumericNo,
      ShelfDescription:this.ShelfDescription
    };
    this.ModelTitle="Add New Shelf";
    this.service.addNewShelf(val).subscribe((data:any)=>{
      window.location.reload();
    });
  }

  updateShelf(){
    var val = {
      ShelfId:this.ShelfId,
      ShelfName:this.ShelfName,
      NumericNo:this.NumericNo,
      ShelfDescription:this.ShelfDescription
    };
    this.ModelTitle="Edit Shelf Info!";
    this.service.updateShelf(this.ShelfId,val).subscribe((data:any)=>{
      window.location.reload();
    });
  }


  // closeClick()
  // {
  //   this.ActivateAddEditShelfComp=false;
  //   this.refreshShelfList();
  // }








}


