import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  static getDate(format: 'ddmmyyyy' | 'yyyymmdd', options: { monthStart?: boolean, monthEnd?: boolean }) {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (options.monthStart) day = 1;
    else if (options.monthEnd) day = this.getMonthLastDay(month);

    switch (format) {
      case 'yyyymmdd':
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
      default:
        return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    }
  }
  static getMonthLastDay(month: number): number {
    switch (month) {
      case 1:
        return 31;
      case 2:
        return 28;
      case 3:
        return 31;
      case 4:
        return 30;
      case 5:
        return 31;
      case 6:
        return 31;
      case 7:
        return 30;
      case 8:
        return 31;
      case 9:
        return 30;
      case 10:
        return 31;
      case 11:
        return 30;
      case 12:
        return 31;
      default:
        return 30;
    }
  }

}
