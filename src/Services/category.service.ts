import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getcategoryData(): Observable<any> {
    return this.http.get(this.baseUrl + 'shopCategory');
  }

  getcategoryListData(): Observable<any> {
    return this.http.get(this.baseUrl + 'categoryList');
  }
}
