import { BaseEntity } from './order.interface';

export interface User extends BaseEntity {
  name: string;
  password?: string;
}
