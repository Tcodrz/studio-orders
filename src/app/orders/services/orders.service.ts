import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
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
    const [sFromYear, sFromMonth, sFromDay] = this._filter.fromDate ? this._filter.fromDate.split('-') : DateService.getDate('ddmmyyyy', {monthStart: true});
    const [sToYear, sToMonth, sToDay] = this._filter.toDate ? this._filter.toDate.split('-') : DateService.getDate('ddmmyyyy', {monthEnd: true});
    for (const order of orders) {
      const [sOrderMonth, sOrderDay, sOrderYear] = order.date.split('/');
      const bYearInRange = ((+sOrderYear) >= (+sFromYear) && (+sOrderYear) <= (+sToYear));
      if (!bYearInRange) continue;
      const bMonthInRange = ((+sOrderMonth) >= (+sFromMonth) && (+sOrderMonth) <= (+sToMonth));
      if (!bMonthInRange) continue;
      const bDayInRange = ((+sOrderDay) >= (+sFromDay) && (+sOrderDay) <= (+sToDay));
      if (!bDayInRange) continue;
      if (this._filter.orderNumber && !utils.isSubStringInString(this._filter.orderNumber.toUpperCase(), order.id.toUpperCase())) continue;
      if (order.price.fullPrice < (this._filter.fromPrice || 0) || order.price.fullPrice > (this._filter.toPrice || Infinity)) continue;
      if (this._filter.customer) {
        const sOrderCustomer = order.customer.name.toLowerCase();
        const sEnglishCustomer = this._filter.customer.toLowerCase();
        const sHebrewCustomer = utils.forceHebrew(sEnglishCustomer);
        const bIsCustomer = utils.isSubStringInString(sEnglishCustomer, sOrderCustomer) || utils.isSubStringInString(sHebrewCustomer, sOrderCustomer);
        if (!bIsCustomer) continue;
      }
      if (this._filter.advertiser) {
        const sOrderAdvertiser = order.advertiser.name.toLowerCase();
        const sEnglishAdvertiser = this._filter.advertiser.toLowerCase();
        const sHebrewAdvertiser = utils.forceHebrew(sEnglishAdvertiser);
        const bIsAdvertiser = utils.isSubStringInString(sEnglishAdvertiser, sOrderAdvertiser) || utils.isSubStringInString(sHebrewAdvertiser, sOrderAdvertiser);
        if (!bIsAdvertiser) continue;
      }
      if (this._filter.narrator) {
        const aNarrNames = order.narrators.map(n => n.name);
        const sHebrewNarrator = utils.forceHebrew(this._filter.narrator.toLowerCase());
        const sEnglishNarrator = this._filter.narrator.toLowerCase();
        const bIsNarrator = utils.isSubStringInStrings(sHebrewNarrator, aNarrNames) || utils.isSubStringInStrings(sEnglishNarrator, aNarrNames);
        if (!bIsNarrator) continue;
      }
      filteredOrders.push(order);
    }
    filteredOrders = filteredOrders.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return filteredOrders;
  }
  getNextOrderNumber(orders$: Observable<Order[]>): Observable<string> {
    const aDate = DateService.getDate('ddmmyyyy', {}).split('-');
    const sMonth = aDate[1];
    const sYear = aDate[2].slice(2);
    return orders$.pipe(
      map((orders) => {
        const sOrderMonth = (order: Order) =>  order.date.split('/')[0];
        const monthlyOrders = orders.filter(o =>  sOrderMonth(o) === sMonth)
        const iOrderNumber = monthlyOrders.length + 1;
        const sOrderNumber = iOrderNumber < 10 ? '00' + iOrderNumber : iOrderNumber < 100 ? '0' + iOrderNumber : iOrderNumber;
        return `S${sYear}-${sMonth}${sOrderNumber}`;
      })
    )
  }
}
