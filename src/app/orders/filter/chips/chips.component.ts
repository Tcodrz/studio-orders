import { FilterItem } from './../../services/orders-filter.service';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipsComponent {
  @Input() set list(val: FilterItem[]) {
    if (val) this.filtersList = [ ...val ];
  }
  @Output() removeActiveFilter: EventEmitter<FilterItem> = new EventEmitter();
  filtersList: FilterItem[] = [];

  translateKey(key: string): string {
    switch (key) {
      case 'orderNumber':
        return 'מספר הזמנה';
      case 'advertiser':
        return 'פרסומאי';
      case 'customer':
        return 'לקוח';
      case 'narrator':
        return 'קריין';
      case 'fromPrice':
        return 'ממחיר';
      case 'toPrice':
        return 'עד מחיר';
      case 'fromDate':
        return 'מתאריך';
      case 'toDate':
        return 'עד תאריך';
      default:
        return '';
    }
  }
}
