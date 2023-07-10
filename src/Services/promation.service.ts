import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromationService {
  baseUrl:string='  http://localhost:3000/';

  constructor( private http : HttpClient) { }

  getPromoImage():Observable<any> {
    return this.http.get(this.baseUrl+'PromotionImage');
  }

  getFarmsData():Observable<any>{
    return this.http.get(this.baseUrl+'Farms');
  }

}
