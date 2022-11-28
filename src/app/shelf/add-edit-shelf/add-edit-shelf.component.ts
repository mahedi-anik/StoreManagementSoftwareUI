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
  Id:string;
  ShelfName:string;
  NumericNo:string;
  ShelfDescription:string;
  ShelfList:any=[];
  //index:number = 0;

  ngOnInit(): void {
    this.LoadShelfList();
  }
  LoadShelfList(){
    this.service.getAllShelfList().subscribe((data:any)=>{
      this.ShelfList=data;

      this.Id=this.shelf.Id,
      this.ShelfName=this.shelf.ShelfName,
      this.NumericNo=this.shelf.NumericNo,
      this.ShelfDescription=this.shelf.ShelfDescription;
    });
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


