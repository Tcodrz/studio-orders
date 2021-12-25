import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { TableColumn } from 'src/app/shared/components/generic-table/generic-table.component';
import { Order } from 'src/app/state/api-interface/order.interface';
import { OrderStatusPipe } from './../../core/pipes/order-status.pipe';


export interface OrderDTO {
  orderNumber: string;
  customer: string;
  advertiser: string;
  status: string;
  price: string | null;
  narrators: string;
  narratorsPrice: string | null;
}

@Component({
  selector: 'app-orders-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [OrderStatusPipe, CurrencyPipe]
})
export class ListComponent {
  @Input() set ordersList(val: Order[]) { if (val.length) this.orders = this.initOrders(val); }
  @Output() onPrint: EventEmitter<Order> = new EventEmitter();
  @Output() onEdit: EventEmitter<Order> = new EventEmitter();
  @Output() onDelete: EventEmitter<Order> = new EventEmitter();
  @ViewChild('orderActions', { read: TemplateRef }) orderActions!: TemplateRef<any>;
  orders: OrderDTO[] = []
  columns: TableColumn[] = [
    { field: 'orderNumber', header: 'מספר הזמנה' },
    { field: 'advertiser', header: 'מזמין העבודה' },
    { field: 'customer', header: 'לקוח' },
    { field: 'status', header: 'סטאטוס' },
    { field: 'price', header: 'מחיר' },
    { field: 'narrators', header: 'קריינים' },
    { field: 'narratorsPrice', header: 'עלות קריינים' },
  ];
  constructor(
    private orderStatusPipe: OrderStatusPipe,
    private currency: CurrencyPipe
  ) { }
  initOrders(orders: Order[]): OrderDTO[] {
    return orders.map(order => ({
      orderNumber: order.id,
      customer: order.customer.name,
      advertiser: order.advertiser.name,
      status: this.orderStatusPipe.transform(order.status),
      price: this.currency.transform(order.price.fullPrice, 'ILS', 'symbol', '0.0'),
      narrators: order.narrators.map(n => n.name).join(', '),
      narratorsPrice: this.currency.transform(order.narratorsPrice, 'ILS', 'symbol', '0.0'),
    }));
  }
}
