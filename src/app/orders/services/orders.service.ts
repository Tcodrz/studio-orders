import { map, of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FilterObject } from './../filter/filter.component';
import { DateService } from './../../shared/services/date.service';
import { Order } from './../../state/api-interface/order.interface';
import { Injectable } from '@angular/core';
import { AppState } from 'src/app/state';


const initialFilter: FilterObject = {
  fromDate: DateService.getDate('ddmmyyyy', { monthStart: true }),
  toDate: DateService.getDate('ddmmyyyy', { monthEnd: true }),
  fromPrice: 0,
  toPrice: Infinity,
  advertiser: '',
  customer: '',
  narrator: '',
  orderNumber: ''
};
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private _filter: FilterObject = initialFilter;
  constructor(
    private store: Store<AppState>
  ) { this.init() }
  private init(): void {
    this.store.pipe(
      select('filter'),
      map(state => state.filter)
    ).subscribe(filter => this._filter = filter);

  }
  private filterOrders(orders: Order[]): Order[] {
    let filteredOrders: Order[] = [];
    const [fYear, fMonth, fDay] = this._filter.fromDate.split('-');
    const [tYear, tMonth, tDay] = this._filter.toDate.split('-');
    for (const order of orders) {
      const [oMonth, oDay, oYear] = order.date.split('/');
      const yearInRange = ((+oYear) >= (+fYear) && (+oYear) <= (+tYear));
      if (!yearInRange) continue;
      const monthInRange = ((+oMonth) >= (+fMonth) && (+oMonth) <= (+tMonth));
      if (!monthInRange) continue;
      const dayInRange = ((+oDay) >= (+fDay) && (+oDay) <= (+tDay));
      if (dayInRange) filteredOrders.push(order);
    }
    filteredOrders =  filteredOrders.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return filteredOrders;
  }
  getfilteredOrders(): Observable<Order[]> {
    return this.store.pipe(
      select('orders'),
      map(state => this.filterOrders(state.orders))
    );
  }
}
