import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DealOfTheDayService {
  baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}


  getDealOfTheDay():Observable<any>{
    return this.http.get<any>(this.baseUrl+'DealOfTheDay')

  }

}
