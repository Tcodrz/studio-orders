import { Injectable } from '@angular/core';
import { DateService } from './../../shared/services/date.service';
import { FilterObject } from './../filter/filter.component';

export const initialFilterObject: FilterObject = {
  fromPrice: null,
  toPrice: Infinity,
  advertiser: '',
  customer: '',
  narrator: '',
  fromDate: DateService.getDate('yyyymmdd', { monthStart: true }),
  toDate: DateService.getDate('yyyymmdd', { monthEnd: true }),
  orderNumber: ''
}

export type FilterItem = {
 key: string;
 value: string | number;
}

@Injectable()
export class OrdersFilterService {
   removeActiveFilter(item: FilterItem, filterObject: FilterObject): FilterObject {
    const newFilterObject: any = { };
    for (const [key, value] of Object.entries(filterObject)) {
      if (key === item.key) {
        if (key === 'fromDate')
          newFilterObject.fromDate = DateService.getDate('yyyymmdd', { monthStart: true });
        else if (key === 'toDate')
          newFilterObject.toDate = DateService.getDate('yyyymmdd', { monthEnd: true });
        else if (typeof value === 'string')
          newFilterObject[key] = '';
        else if (typeof value === 'number')
          newFilterObject[key] = null;
      } else {
        newFilterObject[key] = value;
      }
    }
    return newFilterObject;
   }
   createListFromFilterObject(filterObject: FilterObject): FilterItem[] {
    const monthStart = DateService.getDate('yyyymmdd', { monthStart: true });
    const monthEnd = DateService.getDate('yyyymmdd', { monthEnd: true });
    const filters = Object.entries(filterObject);
    let filtersList: FilterItem[] = [];
    for (const [key, value] of filters) {
      if (key === 'fromDate' && value === monthStart) continue;
      else if (key === 'toDate' && value === monthEnd) continue;
      else if (key === 'toPrice' && value === Infinity) continue;
      filtersList = this.toggleActiveFilter(key, value, filtersList);
    }
    return filtersList;
  }
   toggleActiveFilter(key: string, value: string | number, list: FilterItem[]): FilterItem[] {
    let newList = [ ...list ];
    if (typeof value === 'string') {
      if (value === '') {
        newList = list.filter(x => x.key !== key);
      } else if (!list.includes({key, value}))
        newList.push({key,value});
    }
    if (typeof value === 'number') {
      if (!value || value < 1) {
        newList = list.filter(x => x.key !== key);
      } else if (!list.includes({key, value})) {
        newList.push({key, value});
      }
    }
    return newList;
  }
}
