import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  private baseUrl = 'http://localhost:8765/order-service/item';

  constructor(private http: HttpClient) { }

  addOrderItem(o: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, o);
  }

}
