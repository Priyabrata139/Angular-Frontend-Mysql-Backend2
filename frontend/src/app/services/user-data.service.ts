import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  get_apiUrl="http://localhost:3000/users";
  post_apiUrl="http://localhost:3000/user";
  


  constructor(private http:HttpClient) { }
   getAllUser():Observable<any>{
    return this.http.get(`${this.get_apiUrl}`);
   }

   addNewUser(data:any):Observable<any>{
    return this.http.post(`${this.post_apiUrl}`,data);
  }
 
  // delete_apiUrl="http://localhost:3000/user/:2";
  deleteUser(id:any){
    
   return this.http.delete(`${this.post_apiUrl}/${id}`);
   
  }

  updateUser(data:any,id:any){
    return this.http.put(`${this.post_apiUrl}/${id}`,data);
  }
}
