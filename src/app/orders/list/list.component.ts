import { IconsService } from './../../material/icons.service';
import { of, Observable } from 'rxjs';
import { Order } from 'src/app/state/api-interface/order.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() ordersList: Observable<Order[]> = of([]);
  @Output() onPrint: EventEmitter<Order> = new EventEmitter();
  @Output() onEdit: EventEmitter<Order> = new EventEmitter();
  @Output() onDelete: EventEmitter<Order> = new EventEmitter();

  constructor(public icons: IconsService) { }
  ngOnInit(): void { }
}
