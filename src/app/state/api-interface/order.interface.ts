export interface BaseEntity {
  id: string | number;
}

export interface Order extends BaseEntity {
  orderNumber: string;
}
