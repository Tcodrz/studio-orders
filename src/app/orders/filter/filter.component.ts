import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterItem, initialFilterObject, OrdersFilterService } from './../services/orders-filter.service';

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
      this.filterObject = { ...val };
      this.fromDate = new Date(val.fromDate);
      this.toDate = new Date(val.toDate);
    }
  }
  @Output() onFilter: EventEmitter<FilterObject> = new EventEmitter<FilterObject>();
  @Output() onReset: EventEmitter<void> = new EventEmitter<void>();
  filterObject: FilterObject = initialFilterObject;
  filtersList: FilterItem[] = [];

  fromDate = new Date();
  toDate = new Date();
  constructor(
    private orderFilterService: OrdersFilterService,
  ) { }
  onSubmit(): void {
    this.filtersList = this.orderFilterService.createListFromFilterObject(this.filterObject);
    this.onFilter.emit(this.filterObject);
  }
  resetFiltersState(): void {
    this.onReset.emit();
    this.filtersList = [];
  }
  removeActiveFilter(item: FilterItem, filterObject: FilterObject): void {
    const newFilterObject = this.orderFilterService.removeActiveFilter(item, filterObject);
    this.onFilter.emit(newFilterObject);
    this.filtersList = this.orderFilterService.createListFromFilterObject(newFilterObject);
  }
  onToDate(event: Date): void {
    const date = new Date(event);
    this.filterObject.toDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
  onFromDate(event: any): void {
    const date = new Date(event);
    this.filterObject.fromDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
}
