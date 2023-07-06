import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl='http://localhost:3000/shopCategory';

  constructor(private http: HttpClient){}

  getcategoryData(): Observable<any> {
    return this.http.get(this.categoryUrl);
  }
}
