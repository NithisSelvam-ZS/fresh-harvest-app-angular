import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  baseUrl:string='  http://localhost:3000/';

  constructor(private http : HttpClient) { }

  getCategory():Observable<any>{
    return this.http.get<any>(this.baseUrl+'CategoryList');
  }

  getSubCategory():Observable<any>{
    return this.http.get<any>(this.baseUrl+'Sub-CategoryList')
  }


}
