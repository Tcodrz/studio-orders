import { IconsService } from './../../material/icons.service';
import { OrdersFilterService, FilterItem } from './../services/orders-filter.service';
import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

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
  filterObject: FilterObject = this.orderFilterService.initialFilterState;
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
