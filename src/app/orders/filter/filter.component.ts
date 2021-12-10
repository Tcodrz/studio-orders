import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IconsService } from './../../material/icons.service';
import { FilterItem, OrdersFilterService, initialFilterObject } from './../services/orders-filter.service';

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
    if (val) this.filterObject = { ...val }
  }
  @Output() onFilter: EventEmitter<FilterObject> = new EventEmitter<FilterObject>();
  @Output() onReset: EventEmitter<void> = new EventEmitter<void>();
  filterObject: FilterObject = initialFilterObject;
  filtersList: FilterItem[] = [];

  constructor(
    private orderFilterService: OrdersFilterService,
    public icons: IconsService
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
}
