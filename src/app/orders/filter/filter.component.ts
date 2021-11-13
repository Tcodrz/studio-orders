import { DateService } from './../../shared/services/date.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface FilterObject {
  fromPrice: number | null;
  toPrice: number | null;
  advertiser: string;
  customer: string;
  narrator: string;
  fromDate: string;
  toDate: string;
  orderNumber: string;
}

@Component({
  selector: 'app-orders-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() onFilter: EventEmitter<FilterObject> = new EventEmitter<FilterObject>();

  filterObject: FilterObject = {
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
