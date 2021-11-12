import { User } from './../api-interface/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../api-interface/order.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_ENDPOINT = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_ENDPOINT + 'users');
  }

  userLogin(user: Partial<User>): Observable<User> {
    return this.http.get<User>(this.API_ENDPOINT + 'users/' + user.id);
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_ENDPOINT + 'orders');
  }
}
