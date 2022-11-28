import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:5000/api";
  //readonly PhotoUrl="http://localhost:23185/Photos";

  constructor(private http:HttpClient) { }


/*==================Shelf====================*/

getAllShelfList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Shelf/GetAllShelf');
 }
addNewShelf(val:any){
  return this.http.post(this.APIUrl+'/Shelf/AddNewShelf',val);
}
updateShelf(id:any,val:any){
  return this.http.put(this.APIUrl+'/Shelf/'+id,val);
}
deleteShelf(val:any){
  return this.http.delete(this.APIUrl+'/Shelf/'+ val);
}














}
