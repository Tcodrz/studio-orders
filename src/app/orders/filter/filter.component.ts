import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateService } from './../../shared/services/date.service';
import { FilterItem, OrdersFilterService } from './../services/orders-filter.service';

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
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrdersFilterService]
})
export class FilterComponent {
  @Input() set filterState(val: FilterObject | null) {
    if (val) {
      this.filterForm.patchValue(val);
      this.filterForm.controls['fromDate'].setValue(val.fromDate);
      this.filterForm.controls['toDate'].setValue(val.toDate);
    }
  }
  @Output() onFilter: EventEmitter<FilterObject> = new EventEmitter<FilterObject>();
  @Output() onReset: EventEmitter<void> = new EventEmitter<void>();
  fromDate = new Date();
  toDate = new Date();
  filtersList: FilterItem[] = [];
  filterForm: FormGroup = new FormGroup({
    orderNumber: new FormControl(''),
    customer: new FormControl(''),
    advertiser: new FormControl(''),
    narrator: new FormControl(''),
    fromPrice: new FormControl(null),
    toPrice: new FormControl(Infinity),
    fromDate: new FormControl(DateService.getDate('ddmmyyyy', {monthStart: true})),
    toDate: new FormControl(DateService.getDate('ddmmyyyy', {monthEnd: true}))
  });
  constructor(
    private orderFilterService: OrdersFilterService,
  ) { }
  onSubmit(): void {
    this.filtersList = this.orderFilterService.createListFromFilterObject(this.filterForm.value);
    this.onFilter.emit(this.filterForm.value);
  }
  removeActiveFilter(item: FilterItem): void {
    const newFilterObject = this.orderFilterService.removeActiveFilter(item, this.filterForm.value);
    this.onFilter.emit(newFilterObject);
    this.filtersList = this.orderFilterService.createListFromFilterObject(newFilterObject);
    this.filterForm.patchValue(newFilterObject);
  }
  resetFiltersState() {
    const sMonthStart = DateService.getDate('yyyymmdd', {monthStart: true});
    const sMonthEnd = DateService.getDate('yyyymmdd', {monthEnd: true});
    this.onReset.emit();
    this.filtersList = [];
    this.filterForm.reset();
    this.filterForm.controls['fromDate'].setValue(sMonthStart);
    this.filterForm.controls['toDate'].setValue(sMonthEnd);
  }
}
