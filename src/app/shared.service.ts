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

/*==================Product Category====================*/

getAllProductCategoryList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/ProductCategory/GatAllProductCategory');
 }
addNewProductCategory(val:any){
  return this.http.post(this.APIUrl+'/ProductCategory/AddNewProductCategory',val);
}
updateProductCategory(id:any,val:any){
  return this.http.put(this.APIUrl+'/ProductCategory/'+id,val);
}
deleteProductCategory(val:any){
  return this.http.delete(this.APIUrl+'/ProductCategory/'+ val);
}

/*==================Product====================*/

getAllProductList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Product/GetAllProduct');
 }
addNewProduct(val:any){
  return this.http.post(this.APIUrl+'/Product/AddNewProduct',val);
}
updateProduct(id:any,val:any){
  return this.http.put(this.APIUrl+'/Product/'+id,val);
}
deleteProduct(val:any){
  return this.http.delete(this.APIUrl+'/Product/'+ val);
}
/*==================Supplier====================*/

getAllSupplierList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Supplier/GetAllSuppliers');
 }
addNewSupplier(val:any){
  return this.http.post(this.APIUrl+'/Supplier/AddNewSupplier',val);
}
updateSupplier(id:any,val:any){
  return this.http.put(this.APIUrl+'/Supplier/'+id,val);
}
deleteSupplier(val:any){
  return this.http.delete(this.APIUrl+'/Supplier/'+ val);
}
/*==================Customer====================*/

getAllCustomerList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Customer/GetAllProduct');
 }
addNewCustomer(val:any){
  return this.http.post(this.APIUrl+'/Customer/AddNewProduct',val);
}
updateCustomer(id:any,val:any){
  return this.http.put(this.APIUrl+'/Customer/'+id,val);
}
deleteCustomer(val:any){
  return this.http.delete(this.APIUrl+'/Customer/'+ val);
}










}
