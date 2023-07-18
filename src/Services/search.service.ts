import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchServiceUrl: string = 'http://localhost:3000/recentSearch';

  constructor(private http: HttpClient) {}

  saveSearchValue(value: string): Observable<any> {
    const data = { value }; // Create an object with the value to be saved
    return this.http.post(this.searchServiceUrl, data);
  }
}
