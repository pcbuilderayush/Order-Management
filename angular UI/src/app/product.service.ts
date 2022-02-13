import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8765/product-service/product';

  constructor(private http: HttpClient) { }

  getSelectProduct(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

}
