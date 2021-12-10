import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/state';
import * as utils from '../../core/utils';
import { DateService } from './../../shared/services/date.service';
import { Order } from './../../state/api-interface/order.interface';
import { FilterObject } from './../filter/filter.component';


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
  filterOrders(orders: Order[]): Order[] {
    let filteredOrders: Order[] = [];
    const [fYear, fMonth, fDay] = this._filter.fromDate.split('-');
    const [tYear, tMonth, tDay] = this._filter.toDate.split('-');
    for (const order of orders) {
      const [oMonth, oDay, oYear] = order.date.split('/');
      const yearInRange = ((+oYear) >= (+fYear) && (+oYear) <= (+tYear));
      const monthInRange = ((+oMonth) >= (+fMonth) && (+oMonth) <= (+tMonth));
      const dayInRange = ((+oDay) >= (+fDay) && (+oDay) <= (+tDay));
      if (!yearInRange) continue;
      if (!monthInRange) continue;
      if (!dayInRange) continue;
      if (this._filter.customer && !utils.isSubStringInString(this._filter.customer.toLowerCase(), order.customer.name.toLowerCase())) continue;
      if (this._filter.advertiser && !utils.isSubStringInString(this._filter.advertiser.toLowerCase(), order.advertiser.name.toLowerCase())) continue;
      if (this._filter.orderNumber && !utils.isSubStringInString(this._filter.orderNumber.toUpperCase(), order.id.toUpperCase())) continue;
      if (order.price.fullPrice < (this._filter.fromPrice || 0) || order.price.fullPrice > (this._filter.toPrice || Infinity)) continue;
      if (this._filter.narrator) {
        const narrNames = order.narrators.map(n => n.name);
        const narrator = utils.forceHebrew(this._filter.narrator.toLowerCase());
        const isNarrator = utils.isSubStringInStrings(narrator, narrNames);
        if (!isNarrator) continue;
      }
      filteredOrders.push(order);
    }
    filteredOrders =  filteredOrders.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return filteredOrders;
  }
}
