import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PromationService {
  baseUrl:string='  http://localhost:3000/';
  isExploreClicked: boolean = false;


  constructor( private http : HttpClient) { }

  getPromoImage():Observable<any> {
    return this.http.get(this.baseUrl+'PromotionImage');
  }

  getFarmsData():Observable<any>{
    return this.http.get(this.baseUrl+'Farms');
  }


  getbuttonValue(data:any){
    this.isExploreClicked = data;
  }

}
