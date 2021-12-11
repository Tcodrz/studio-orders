import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus',
})
export class OrderStatusPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    switch (value) {
      case 'open':
        return 'פתוחה';
      case 'closed':
        return 'סגורה';
      case 'signed and done':
        return 'בוצע וחתום';
      case 'done':
        return 'בוצע';
      default:
        return 'לא ידוע';
    }
  }
}
