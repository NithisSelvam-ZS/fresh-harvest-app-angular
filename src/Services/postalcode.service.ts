import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostalcodeService {
  private pincodeUrl = 'https://api.postalpincode.in/pincode/';

  constructor(private http: HttpClient) {}

  getPincodeData(Pincode: string): Observable<any> {
    const url = `${this.pincodeUrl}${Pincode}`;
    return this.http.get(url);
  }
}
