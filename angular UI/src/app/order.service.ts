import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8765/order-service/order';

  constructor(private http: HttpClient) { }

  getOrder(orderId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/byId/${orderId}`);
  }

  createOrder(order: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, order);
  }

  updateOrder(orderId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${orderId}`, value);
  }

  deleteOrder(orderId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteId/${orderId}`, { responseType: 'text' });
  }

  getOrdersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
