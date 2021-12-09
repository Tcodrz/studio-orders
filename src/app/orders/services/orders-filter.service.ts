import { DateService } from './../../shared/services/date.service';
import { FilterObject } from './../filter/filter.component';
import { Injectable } from '@angular/core';



export type FilterItem = {
 key: string;
 value: string | number;
}

@Injectable()
export class OrdersFilterService {
  get initialFilterState(): FilterObject {
    return {
      fromPrice: null,
      toPrice: null,
      advertiser: '',
      customer: '',
      narrator: '',
      fromDate: DateService.getDate('yyyymmdd', { monthStart: true }),
      toDate: DateService.getDate('yyyymmdd', { monthEnd: true }),
      orderNumber: ''
    }
  }
  /**
   * Removes active filter from filters object
   * @param item active filter to remove
   * @returns an updated list of active filters
   */
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
  /**
   * Takes a filter object and maps it to array of active filters
   * @param filterObject Filters object to construct a list from
   * @returns a list of active filters
   */
   createListFromFilterObject(filterObject: FilterObject): FilterItem[] {
    const monthStart = DateService.getDate('yyyymmdd', { monthStart: true });
    const monthEnd = DateService.getDate('yyyymmdd', { monthEnd: true });
    const filters = Object.entries(filterObject);
    let filtersList: FilterItem[] = [];
    for (const [key, value] of filters) {
      if (key === 'fromDate') {
        if (value === monthStart) continue;
      } else if (key === 'toDate') {
        if (value === monthEnd) continue;
      }
      filtersList = this.toggleActiveFilter(key, value, filtersList);
    }
    return filtersList;
  }
  /**
   * Takes a list of active filters
   * Adds or removes the value from the list
   * and returns the same list
   * @param key key to toggle
   * @param value value to toggle
   * @param list list of active filters
   * @returns the list given as input after change
   */
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
