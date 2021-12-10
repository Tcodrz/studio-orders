import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order } from '../api-interface/order.interface';
import { User } from './../api-interface/user.interface';

export interface ApiResponse {
  data: any;
  error: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_ENDPOINT = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }
  getAllOrders(): Observable<Order[]> {
    return this.http.get<ApiResponse>(this.API_ENDPOINT + 'orders').pipe(
      map(res => res.error ? [] : res.data)
    );
  }
  authenticateUser(user: Partial<User>): Observable<User | null> {
    return this.http.post<ApiResponse>(this.API_ENDPOINT + 'auth', user)
    .pipe(map(res => res.error ? null : res.data ));
  }
}
