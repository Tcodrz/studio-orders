import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/state/api-interface/order.interface';
import { IconsService } from './../../material/icons.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() ordersList: Observable<Order[]> = of([]);
  @Output() onPrint: EventEmitter<Order> = new EventEmitter();
  @Output() onEdit: EventEmitter<Order> = new EventEmitter();
  @Output() onDelete: EventEmitter<Order> = new EventEmitter();

  constructor(public icons: IconsService) { }
}
