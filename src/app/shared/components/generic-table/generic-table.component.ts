import { Component, Input } from '@angular/core';

export type TableColumn = { field: string; header: string };


@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent {
  @Input() set value(val: any[]) {
    this._value = [ ...val ];
  }
  @Input() cols: TableColumn[] = [];
  @Input() bWithActions = false;
  _value: any[] = [];
}
