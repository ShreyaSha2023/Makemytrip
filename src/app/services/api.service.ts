import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  //http://localhost:3000/search-hotels
  getDataFromServer(data:any)
  {
    console.log("in service");
    const url:string ="http://localhost:3000/" + data
     return this.http.get(url);
    
  }
}
