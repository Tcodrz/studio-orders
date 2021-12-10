import { FilterItem } from './../../services/orders-filter.service';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as utils from '../../../core/utils';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipsComponent {
  @Input() set list(val: FilterItem[]) { if (val) this.filtersList = [ ...val ]; }
  @Output() removeActiveFilter: EventEmitter<FilterItem> = new EventEmitter();
  filtersList: FilterItem[] = [];
  isDate(key: string): boolean { return key === 'fromDate' || key === 'toDate'; }
  isNarrator(key: string): boolean { return key === 'narrator'; }
  toHebrew(value: string): string { return utils.forceHebrew(value.toLowerCase()); }
  parseDate(value: string): string {
    const date = value.split('-');
    return `${date[2]}-${date[1]}-${date[0]}`;
  }
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
